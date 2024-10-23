import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Database, ref, get, child } from '@angular/fire/database';
import { inject } from '@angular/core';
import { compileNgModule } from '@angular/compiler';
import { AuthService } from 'src/app/services/auth-user.service';
import { user } from '@angular/fire/auth';

@Component({
  selector: 'app-app-info',
  templateUrl: './app-info.page.html',
  styleUrls: ['./app-info.page.scss'],
})
export class AppInfoPage implements OnInit {
  private db: Database = inject(Database);
  public residuos: any[] = [];

  constructor(private navCtrl: NavController, private fAuth: AuthService) { }

  ngOnInit() {
    this.fetchResiduos();
  }

  fetchResiduos() {
    const residuosRef = ref(this.db, 'residuos/'); // Cambia esta ruta a donde están tus residuos en la base de datos

    get(residuosRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          let user = this.obtenerUser();
          this.residuos = Object.values(snapshot.val()); 
          const CompleteData = snapshot.val();
          console.log(this.residuos);
          Object.keys(CompleteData).forEach((key) => {
            console.log(CompleteData[key].UserId);
          }); 
        } else {
          console.log('No hay datos disponibles');
        }
      })
      .catch((error) => {
        console.error('Error al obtener datos: ', error);
      });
  }
  obtenerUser(): any{
    this.fAuth.getCurrentUser().then(user => {
      console.log(user.uid);
      return user.uid;
    }).catch(error => {
      console.error('Error al obtener el usuario actual:', error);
      return null
    });
  }

  goHome(){
    this.navCtrl.navigateForward('/home'); 
  }
}


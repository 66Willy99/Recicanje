import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ResiduosService } from 'src/app/services/residuos.service';
import { Database, ref, get, child } from '@angular/fire/database';
import { inject } from '@angular/core';
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-app-info',
  templateUrl: './app-info.page.html',
  styleUrls: ['./app-info.page.scss'],
})
export class AppInfoPage implements OnInit {
  private db: Database = inject(Database);
  public residuos: any[] = [];

  constructor(private navCtrl: NavController,private residuosService: ResiduosService) { }

  ngOnInit() {
    this.fetchResiduos();
  }

  fetchResiduos() {
    const residuosRef = ref(this.db, 'residuos/'); // Cambia esta ruta a donde están tus residuos en la base de datos

    get(residuosRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          this.residuos = Object.values(snapshot.val()); // Suponiendo que tus residuos están guardados como un objeto
          console.log(this.residuos);
        } else {
          console.log('No hay datos disponibles');
        }
      })
      .catch((error) => {
        console.error('Error al obtener datos: ', error);
      });
  }

  goHome(){
    this.navCtrl.navigateForward('/home'); 
  }
}


import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Database, ref, set } from '@angular/fire/database';
import { inject } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth-user.service';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {
  private db = inject(Database); 

  ResName = "";
  ResType = "";
  ResTypes: string[] = ['Plastico', 'Papel & Carton', 'Metal', "Organico"];
  selectedImage: string | null = null; 

  constructor(
    private fAuth: AuthService,
    private navCtrl: NavController,
    private toastController: ToastController
   ) { }

  ngOnInit() {
    this.fAuth.getCurrentUser()
    .then(user => {
      if (user === null) {
        this.Notificacion('Debes estar logeado para escanear residuos', 'danger');
      }
    })
    .catch(error => {
      console.error('Error al obtener el usuario actual:', error);
    });
  }

  async Notificacion(mensaje: string, color: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,  
      position: 'top', 
      color: color    
    });
    toast.present();
  }

  onImageSelected(imageBase64: string) {
    console.log(imageBase64);
    this.selectedImage = imageBase64; 
  }

  sendData() {
    console.log('Enviar datos:', this.ResName, this.ResType, this.selectedImage); 
    console.log();
    this.fAuth.getCurrentUser()
    .then(user => {
      if (this.ResName && this.ResType && this.selectedImage) {
        const data = {
          UserId: user.uid,
          ResName: this.ResName,
          ResType: this.ResType,
          ImageUrl: this.selectedImage
        };
    
        const dbRef = ref(this.db, 'residuos/' + Date.now());
    
        set(dbRef, data)
          .then(() => {
            this.Notificacion('Residuo guardado correctamente', 'success');
            console.log('Datos enviados a Firebase');
            this.ResName = '';
            this.ResType = '';
            this.selectedImage = null;
            this.navCtrl.navigateForward('/home');
          })
          .catch(error => {
            console.error('Error al enviar los datos a Firebase:', error);
            this.Notificacion('Error al guardar el residuo, intente nuevamente', 'danger');
          });
      } else {
        console.error('Por favor completa todos los campos antes de enviar.');
        this.Notificacion('Por favor completa todos los campos antes de enviar', 'danger');
      }
    })
    .catch(error => {
      console.error('Error al obtener el usuario actual:', error);
    });
    
  }

  goHome() {
    this.navCtrl.navigateForward('/home');
  }
}

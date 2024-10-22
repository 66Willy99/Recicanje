import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PhotoService } from 'src/app/services/photo.service';
import { Database, ref, set } from '@angular/fire/database';
import { inject } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {
  private db = inject(Database); 

  ResName = "";
  ResType = "";
  ResTypes: string[] = ['Plastico', 'Vidrio', 'Papel', 'Metal'];
  selectedImage: string | null = null; 

  constructor(
    private navCtrl: NavController,
    private PhotoSrv: PhotoService,
    private toastController: ToastController
   ) { }

  ngOnInit() {
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
    
    if (this.ResName && this.ResType && this.selectedImage) {
      const data = {
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
  }

  goHome() {
    this.navCtrl.navigateForward('/home');
  }
}

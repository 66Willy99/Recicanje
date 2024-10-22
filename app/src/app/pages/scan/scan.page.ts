import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PhotoService } from 'src/app/services/photo.service';
import { Database, ref, set } from '@angular/fire/database';
import { inject } from '@angular/core';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {
  @Output() imageSelected = new EventEmitter<string>();
  private db = inject(Database); 

  ResName = "";
  ResType = "";
  ResTypes: string[] = ['Plastico', 'Vidrio', 'Papel'];
  selectedImage: string | null = null; 

  constructor(
    private navCtrl: NavController,
    private PhotoSrv: PhotoService
  ) { }

  ngOnInit() {
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
          console.log('Datos enviados a Firebase');
          this.ResName = '';
          this.ResType = '';
          this.selectedImage = null;
        })
        .catch(error => {
          console.error('Error al enviar los datos a Firebase:', error);
        });
    } else {
      console.error('Por favor completa todos los campos antes de enviar.');
    }
  }

  async takePicture() {
    try {
      const base64Image = await this.PhotoSrv.takePhoto();
      this.imageSelected.emit(base64Image);
      this.onImageSelected(base64Image);
    } catch (error) {
      console.error('Error taking picture:', error);
    }
  }

  goHome() {
    this.navCtrl.navigateForward('/home');
  }
}

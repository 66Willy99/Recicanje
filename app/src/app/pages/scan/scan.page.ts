import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PhotoService } from 'src/app/services/photo.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';


@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {
  @Output() imageSelected = new EventEmitter<string>();

  ResName = "";
  ResType = "";
  ResTypes: string[] = ['Plastico', 'Vidrio', 'Papel'];
  selectedImage: string | null = null; // Para manejar la imagen seleccionada

  constructor(
    private navCtrl: NavController,
    private PhotoSrv: PhotoService
  ) { }

  ngOnInit() {
  }

  sendData(){

  }
  // Método para manejar la selección de la imagen
  onImageSelected(imageBase64: string) {
    console.log(imageBase64);
    this.selectedImage = imageBase64; // Guardamos la imagen seleccionada en base64
    // this.reportForm.patchValue({ imageUrl: this.selectedImage }); // Actualizamos el campo imageUrl en el formulario
  }

  // Método para tomar foto
  async takePicture() {
    try {
      const base64Image = await this.PhotoSrv.takePhoto();
      this.imageSelected.emit(base64Image);
    } catch (error) {
      console.error('Error taking picture:', error);
    }
  }
  
  goHome(){
    this.navCtrl.navigateForward('/home'); 
  }
}

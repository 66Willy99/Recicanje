import { Component, Output, EventEmitter } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss'],
})
export class ImageUploaderComponent {
  @Output() imageSelected = new EventEmitter<string>(); 

  constructor() { }
  
  async takePhoto() { 
    try{
      const image = await Camera.getPhoto({
        quality: 90,
        source: CameraSource.Camera,
        resultType: CameraResultType.DataUrl
      });
      
      const base64Image = image.dataUrl;

      if (base64Image) {
        this.imageSelected.emit(base64Image); 
      } else {
        console.error('No se tomó ninguna foto');
      }
    } catch (error) {
      console.error('Error tomando la foto', error);
    }
  }
}
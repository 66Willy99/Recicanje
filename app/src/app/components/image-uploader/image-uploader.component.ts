import { Component, Output, EventEmitter } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss'],
})
export class ImageUploaderComponent {
  @Output() imageSelected = new EventEmitter<string>();  // Emite la imagen seleccionada

  constructor(private photoSrv: PhotoService) { }

  async takePicture() {
    try {
      const base64Image = await this.photoSrv.takePhoto();
      this.imageSelected.emit(base64Image);
    } catch (error) {
      console.error('Error taking picture:', error);
    }
  }

}
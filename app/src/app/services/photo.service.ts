import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

import { defineCustomElements } from '@ionic/pwa-elements/loader';
defineCustomElements(window);


@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  public async takePhoto(){

      const image = await Camera.getPhoto({
        quality: 90,
        source: CameraSource.Camera,
        resultType: CameraResultType.Uri
      });
  
  }
}

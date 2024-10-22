import { Injectable } from '@angular/core';
import { Component, Output, EventEmitter } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

import { defineCustomElements } from '@ionic/pwa-elements/loader';
defineCustomElements(window);


@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  @Output() imageSelected = new EventEmitter<string>();

  constructor() { }

}

import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {

  constructor(public photoService: PhotoService) { }
  

  ngOnInit() {
    
  }
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

}

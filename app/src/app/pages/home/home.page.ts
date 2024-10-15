import { Component, OnInit } from '@angular/core';
import { homeBtn } from 'src/app/models/homeBtn.model';
import { NavController } from '@ionic/angular';
import { PhotoService } from 'src/app/services/photo.service';
import { AuthService } from 'src/app/services/auth-user.service';
import { User } from '../../models/user.model';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  currentUser: User | null = null;

  homeBtns: homeBtn[] = [
    {
      id: '1',
      title: 'Shop',
      name: 'Tienda', 
      action: () => this.goShop(),
      imageUrl: '../../../assets/icon/Tienda.png',
      status: 'Enable',
      class: 'shop-btn',
    },
    {
      id: '2',
      title: 'Info',
      name: 'Informacion',
      action: () => this.goInfo(),
      imageUrl: '../../../assets/icon/Info.png',
      status: 'Enable',
      class: 'info-btn',
    }
  ];

  constructor(private navCtrl: NavController, private PhotoSrv: PhotoService, private AuthService: AuthService) { }

  ngOnInit() {
  }

  goShop(){
    this.navCtrl.navigateForward('/shop');
  }
  goInfo(){
    this.navCtrl.navigateForward('/app-info');
  }
  navToScan(){
    this.PhotoSrv.takePhoto();
    
    this.navCtrl.navigateForward('/scan');
  }
  navToProfile(){
    this.navCtrl.navigateForward('/user-profile')
  }
}

import { Component, OnInit } from '@angular/core';
import { homeBtn } from 'src/app/models/homeBtn.model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

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

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goShop(){
    this.navCtrl.navigateForward('/shop');
  }
  goInfo(){
    this.navCtrl.navigateForward('/app-info');
  }
  navToScan(){
    this.navCtrl.navigateForward('/scan');
  }
  navToProfile(){
    this.navCtrl.navigateForward('/user-profile')
  }
  

}

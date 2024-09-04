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
      action: 'goShop()',
      imageUrl: '1JPvHyMNpgG7m4h0mEqcs6h0oX3gSAzEe',
      status: 'Enable'
    },
    {
      id: '2',
      title: 'Info',
      name: 'Informacion',
      action: 'goInfo()',
      imageUrl: '1L3wcF_ANDHOmhG9hkIx89JN40wftRO1a',
      status: 'Enable'
    }
  ];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  navToShop(){
    this.navCtrl.navigateForward('/shop');
  }
  navToInfo(){
    this.navCtrl.navigateForward('/info');
  }
  navToScan(){
    this.navCtrl.navigateForward('/scan');
  }
  navToProfile(){
    this.navCtrl.navigateForward('/user-profile')
  }
  

}

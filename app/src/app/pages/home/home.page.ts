import { Component, OnInit } from '@angular/core';
import { homeBtn } from 'src/app/models/homeBtn.model';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth-user.service';
import { ChangeDetectorRef } from '@angular/core';
import { user } from '@angular/fire/auth';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private navCtrl: NavController, private afAuth: AuthService, private cdr: ChangeDetectorRef) { }
  
  displayName = this.afAuth.getCurrentUser()
    .then(user => {
      if (user === null) {
        this.navCtrl.navigateForward('/login');
      }
      else{
        this.displayName = user.displayName;
      }
    })
    .catch(error => {
      console.error('Error al obtener el usuario actual:', error);
    });
  

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

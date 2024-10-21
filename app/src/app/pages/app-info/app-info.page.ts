import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-app-info',
  templateUrl: './app-info.page.html',
  styleUrls: ['./app-info.page.scss'],
})
export class AppInfoPage implements OnInit {

  constructor(private navCtrl: NavController,) { }

  ngOnInit() {
  }
  goHome(){
    this.navCtrl.navigateForward('/home'); 
  }
}

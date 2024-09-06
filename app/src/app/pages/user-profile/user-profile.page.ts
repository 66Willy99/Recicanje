import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  user: string = "";

  constructor(private navCtrl: NavController, private toastController: ToastController) { }

  ngOnInit() {
  }

  async MensajeLogin(mensaje: string, color: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,  
      position: 'top', 
      color: color    
    });
    toast.present();
  }

  ActName(){

    if(this.user.trim() == ""){
      this.MensajeLogin('Debes ingresar un nombre para continuar','danger');
    }
    else if(this.user.length > 15){
      this.MensajeLogin('Maximo de 15 Caracteres','danger');
    }
    else{
      this.MensajeLogin('Nombre actualizado correctamente','success');
      this.user = this.user;
    }

  }

  Cierre(){
    this.navCtrl.navigateForward('/login');
  }

}

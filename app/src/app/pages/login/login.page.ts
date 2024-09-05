import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  pass: string = '';

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

  VaLogin() {

    if (this.email == "admin" && this.pass == "admin"){
        this.navCtrl.navigateForward('/home');
        this.MensajeLogin('Inicio de sesion correcto','success')
    }
    else{
      this.MensajeLogin('Inicio de sesion incorrecto','danger')
    }
  }

}

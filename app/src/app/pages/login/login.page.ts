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

  async SesionCorrecta(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,  
      position: 'top', 
      color: 'success'    
    });
    toast.present();
  }

  async SesionInorrecta(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,  
      position: 'top', 
      color: 'danger'    
    });
    toast.present();
  }

  VaLogin() {

    if (this.email == "admin" && this.pass == "admin"){
        this.navCtrl.navigateForward('/home');
        this.SesionCorrecta('Inicio de sesion correcto')
    }
    else{
      this.SesionInorrecta('Inicio de sesion incorrecto')
    }
  }

}

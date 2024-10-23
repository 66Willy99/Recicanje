import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth-user.service';
import { User } from 'src/app/models/user.model';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  userDisplayName: string = "";

  constructor(private navCtrl: NavController, private toastController: ToastController, private fAuth: AuthService, private cdr: ChangeDetectorRef) { }

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
    if(this.userDisplayName.trim() == ""){
      this.MensajeLogin('Debes ingresar un nombre para continuar','danger');
    }
    else if(this.userDisplayName.length > 15){
      this.MensajeLogin('Maximo de 15 Caracteres','danger');
    }
    else{
      // Obtener el usuario actual desde AuthService para actualizarlo
      const UserId = this.fAuth.getLocalStorageItem('uid')// Asumiendo que tienes una forma de obtener el usuario actual
      this.cdr.detectChanges();
      // Actualizar solo el nombre del usuario si currentUser existe
      if (UserId) {
        //Falta logica de actualizacion de nombre
      }
    }
  }

  Cierre(){
    this.navCtrl.navigateForward('/login');
  }
  goHome(){
    this.navCtrl.navigateBack('/home');
  }
}

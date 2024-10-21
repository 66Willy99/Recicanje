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

  user: string = "";

  constructor(private navCtrl: NavController, private toastController: ToastController, private AuthService: AuthService, private cdr: ChangeDetectorRef) { }

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

  // ActName(){
  //   if(this.user.trim() == ""){
  //     this.MensajeLogin('Debes ingresar un nombre para continuar','danger');
  //   }
  //   else if(this.user.length > 15){
  //     this.MensajeLogin('Maximo de 15 Caracteres','danger');
  //   }
  //   else{
  //     // Obtener el usuario actual desde AuthService para actualizarlo
  //     const currentUser = this.AuthService.getCurrentUser(); // Asumiendo que tienes una forma de obtener el usuario actual
  //     this.cdr.detectChanges();
  //     // Actualizar solo el nombre del usuario si currentUser existe
  //     if (currentUser) {
  //       const updatedUser: User = { ...currentUser, name: this.user };
  //       this.AuthService.updateUser(updatedUser);
  //       console.log(updatedUser)
  //       console.log(this.AuthService.users)
  //       // ESTO FUNCIONA PERO TIENES QUE CERRAR SESION Y VOLVER A INGRESAR
  //       this.MensajeLogin('Nombre actualizado correctamente', 'success');
  //       this.user = ""; // Reiniciar la variable user después de la actualización
  //       this.navCtrl.navigateForward('/login');
  //     } else {
  //       this.MensajeLogin('No se encontró el usuario actual', 'danger');
  //     }
  // }
  // }

  Cierre(){
    this.navCtrl.navigateForward('/login');
  }
  goHome(){
    this.navCtrl.navigateBack('/home');
  }
}

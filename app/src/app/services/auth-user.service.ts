import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private afAuth : AngularFireAuth,
    private router: Router
  ) { }

  register(user: User): Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
      .then((result) => {
        console.log('Usuario creado satisfactoriamente', result);
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        console.log('Error al crear el usuario', error);
        throw error;
      });
  }

  // Iniciar sesión con Firebase
  login(email: string, password: string): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email, password)
    .then((result) => {
      console.log('Sesion iniciada satisfactoriamente', result);
      this.setLocalStorageItem('uid',result.user?.uid);
      this.setLocalStorageItem('displayName', result.user?.displayName);
      this.router.navigate(['/home']);
    })
    .catch((error) => {
      console.log('Error al iniciar sesión', error);
      throw error;
    });
  }

  // Cerrar sesión
  logout(): Promise<any> {
    return this.afAuth.signOut()
      .then(() => {
        console.log('Sesion cerrada satisfactoriamente');
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        console.log('Error al cerrar sesion', error);
        throw error;
      });
  }

  // Cambio de contraseña
  resetPassword(email: string): Promise<any> {
    return this.afAuth.sendPasswordResetEmail(email)
      .then(() => {
        console.log('Se envio un correo para restablecer la contraseña');
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        console.log('Error al enviar correo', error);
        throw error;
      });
  }

  isLoggedIn(): Observable<boolean> {
    return this.afAuth.authState.pipe(
      map(user => !!user)
    );
  }

  getCurrentUser(): Promise<any> {
    console.log(this.afAuth.currentUser);
    return this.afAuth.currentUser;
  }

  getLocalStorageItem = <T>(key: string): T | null => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) as T : null;
  }
  setLocalStorageItem = <T>(key: string, value: T): void => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  destoyLocalStorageItem = <T>(key: string) : void => {
    window.localStorage.removeItem(key);
  }

  updateName(displayName: string): Promise<any> {
    return this.afAuth.currentUser
      .then((user) => {
        let dName = user?.updateProfile({
          displayName: displayName
        });
        this.setLocalStorageItem('displayName', displayName);
        console.log(dName);
        return dName;
      })
      .then(() => {
        console.log('Nombre actualizado satisfactoriamente');
      })
      .catch((error) => {
        console.log('Error al actualizar el nombre', error);
        throw error;
      });
  }

}
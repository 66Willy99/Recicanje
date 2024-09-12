import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: User[] = 
  [{
    uid: '1',
    name: 'Juan Perez',
    email: 'juan.perez@example.com',
    password: '1234'
  },
  {
    uid: '2',
    name: 'Maria Gomez',
    email: 'maria.gomez@example.com',
    password: '1234'
  },
  {
    uid: '3',
    name: 'admin',
    email: 'admin',
    password: 'admin'
  }
];
  private currentUser: User | null = null;

  constructor() { }

  register(user: User): boolean {
    // Verificar si el usuario existe
    const userExists = this.users.find(u => u.email === user.email);
    if (userExists) {
      return false; // Usuario ya existe
    }
    
    // Crear un nuevo UID para el usuario
    user.uid = (this.users.length + 1).toString(); // Asignar nuevo UID
    this.users.push(user); // Agregar nuevo usuario

    return true;
  }

  login(email: string, password: string): boolean {
    //Busca el usuario en la lista
    const user = this.users.find(user => user.email === email && user.password === password);
    if(user){
      this.currentUser = user;
      return true;
    }

    return false;
  }

  logout(): void {
    this.currentUser = null; // Cierre la sesión
  }

  isLoggedIn(): boolean {
    return this.currentUser !== null; // Verifica si hay un usuario logeado
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  updateUser(user: User): void {
    const index = this.users.findIndex(u => u.email === user.email);
    if (index !== -1) {
      this.users[index] = user;
    }
  }

}
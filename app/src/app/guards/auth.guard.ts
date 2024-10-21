// ng generate guard guards/auth --implements CanActivate
import { CanActivateFn, Router } from '@angular/router'; // Import router is same than NavController
import { AuthService } from '../services/auth-user.service';
import { Injectable, inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if(authService.isLoggedIn()) {
    console.log("buscando guard");
    console.log(authService.getCurrentUser());
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};

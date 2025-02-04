import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(LoginService); // Inject the AuthService
  const router = inject(Router); // Inject the Router

  if (authService.is_authenticated()) {
    return true; // Allow access to the route
  } else {
    router.navigate(['/']); // Redirect to the login page if not authenticated
    return false; // Deny access to the route
  }
};

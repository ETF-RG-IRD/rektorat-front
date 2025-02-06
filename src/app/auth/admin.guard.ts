import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

export const adminGuard: CanActivateFn = (route, state) => {
    const authService = inject(LoginService); // Inject the AuthService
    const router = inject(Router); // Inject the Router

    if (authService.is_authenticated() && authService.is_administrator()) {
      return true; // Allow access to the route
    } else {
      router.navigate(['/']); // Redirect to the login page if not authenticated
      return false; // Deny access to the route
    }
};

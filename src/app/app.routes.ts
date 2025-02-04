import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EnrollComponent } from './enroll/enroll.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'enroll', component: EnrollComponent, canActivate: [authGuard]}
];

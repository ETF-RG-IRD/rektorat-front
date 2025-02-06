import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EnrollComponent } from './enroll/enroll.component';
import { authGuard } from './auth/auth.guard';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { adminGuard } from './auth/admin.guard';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'enroll', component: EnrollComponent, canActivate: [authGuard]},
    {path: 'admin', component: AdminComponent, canActivate: [adminGuard]},
    {path: 'register', component: RegisterComponent},
];

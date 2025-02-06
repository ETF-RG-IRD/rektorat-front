import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  password: string = '';
  username: string = '';


  constructor(private login_service: LoginService, private router: Router) {}

  login(): void {
    if(this.username == '' || this.password == '') {
      alert('Username ili password polje prazno!'); 
      return;
    }
    
    this.login_service.login(this.username, this.password)

  }

  register(): void {
    this.router.navigate(['/register'])
  }

}

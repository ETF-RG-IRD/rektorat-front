import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  org: string = '';

  constructor(private router: Router, private registration_service: RegisterService) { }

  private check_uid(uid: string): boolean {
    const regex = /^\d{4}\/\d+$|^[A-Z]+\/\d+$/;

    return regex.test(uid);
  }

  register() {
    if (this.username == '' || this.password == '' || this.org == '') {
      alert('Prazna polja! Popunite sva polja i probajte ponovo!');
      return;
    }
    if(!this.check_uid(this.username)) {
      alert('Mora index da bude username zbog identifikacije!');
      return;
    }

    this.registration_service.register(this.username, this.org.toUpperCase(), this.password);
  }
}

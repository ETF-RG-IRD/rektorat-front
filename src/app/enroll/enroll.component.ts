import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EnrollService } from '../services/enroll.service';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enroll',
  imports: [FormsModule, CommonModule],
  templateUrl: './enroll.component.html',
  styleUrl: './enroll.component.css'
})
export class EnrollComponent implements OnInit {
  org: string = '';
  uid: string = '';
  is_admin: boolean = false;
  constructor(private enroll_service: EnrollService, private router: Router, private login_service: LoginService) { }
  ngOnInit(): void {
    this.is_admin = this.login_service.is_administrator();
  }

  private check_uid(uid: string): boolean {
    const regex = /^\d{4}\/\d+$|^[A-Z]+\/\d+$/;

    return regex.test(uid);
  }

  enroll(): void {
    if(!this.check_uid(this.uid)) {
      alert('Indeks mora biti u formatu GGGG/BBBB ili u posebnom slučaju Višera SMER/BBBB');
      return;
    }
    this.enroll_service.enroll(this.uid, this.org.toUpperCase());
  }

  check(): void {
    if(!this.check_uid(this.uid)) {
      alert('Indeks mora biti u formatu GGGG/BBBB ili u posebnom slučaju Višera SMER/BBBB');
      return;
    }
    this.enroll_service.check(this.uid, this.org.toUpperCase());
  }

  admin_panel(): void {
    this.router.navigate(['/admin'])
  }
}

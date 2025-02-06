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
export class EnrollComponent implements OnInit{
  org : string = '';
  uid : string = '';
  is_admin: boolean = false;
  constructor(private enroll_service: EnrollService, private router: Router, private login_service: LoginService) {}
  ngOnInit(): void {
    this.is_admin = this.login_service.is_administrator();
  }
  enroll(): void {
    this.enroll_service.enroll(this.uid, this.org);
  }

  admin_panel(): void {
    this.router.navigate(['/admin'])
  }
}

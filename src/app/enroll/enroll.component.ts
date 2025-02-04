import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EnrollService } from '../services/enroll.service';

@Component({
  selector: 'app-enroll',
  imports: [FormsModule, CommonModule],
  templateUrl: './enroll.component.html',
  styleUrl: './enroll.component.css'
})
export class EnrollComponent{
  org : string = '';
  uid : string = '';
  
  constructor(private enroll_service: EnrollService) {}
  
  enroll(): void {
    this.enroll_service.enroll(this.uid, this.org);
  }

}

import { Component, OnInit } from '@angular/core';
import { RegRequest } from '../models/request.model';
import { AdminService } from '../services/admin.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public all_requests: RegRequest[] = [];

  constructor(private admin_service: AdminService) { }

  ngOnInit(): void {
    this.admin_service.get_all_requests().subscribe({
      next: (data: any) => {
        this.all_requests = data.requests as RegRequest[]; // Assign the fetched data to all_requests
        console.log('Fetched requests:', this.all_requests);
      },
      error: (error) => {
        console.error('Error fetching requests:', error);
      },
      complete: () => {
        console.log('Request completed');
      }
    });
  }

  /**
   * TODO: Finish this on the front & back
   */
  approve_request(UUID: string): void {
    this.admin_service.accept_request(UUID).subscribe((data) => {
      if (data) {
        alert('Uspešno prihvaćen nalog!')
        this.admin_service.get_all_requests().subscribe({
          next: (data: any) => {
            this.all_requests = data.requests as RegRequest[]; // Assign the fetched data to all_requests
            console.log('Fetched requests:', this.all_requests);
          },
          error: (error) => {
            console.error('Error fetching requests:', error);
          },
          complete: () => {
            console.log('Request completed');
          }
        });
      }
    })
  }

  decline_request(UUID: string): void {
    this.admin_service.decline_request(UUID).subscribe((data) => {
      if (data) {
        alert('Odbijen nalog!')
        this.admin_service.get_all_requests().subscribe({
          next: (data: any) => {
            this.all_requests = data.requests as RegRequest[]; // Assign the fetched data to all_requests
            console.log('Fetched requests:', this.all_requests);
          },
          error: (error) => {
            console.error('Error fetching requests:', error);
          },
          complete: () => {
            console.log('Request completed');
          }
        });
      }
    })
  }
}
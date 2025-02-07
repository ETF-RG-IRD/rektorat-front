import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegRequest } from '../models/request.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private uri: string = 'http://localhost:4000';
  constructor(private http: HttpClient) { }

  requests: RegRequest[] = []

  accept_request(UUID: string) {
    const data = {'uuid': UUID};
    return this.http.post(`${this.uri}/admin/approve`, data);
  }
  
  decline_request(UUID: string) {
    const data = {'uuid': UUID};
    return this.http.post(`${this.uri}/admin/decline`, data);
  }

  get_all_requests(): Observable<RegRequest[]> {
    return this.http.get<RegRequest[]>(`${this.uri}/admin`);
  }
}

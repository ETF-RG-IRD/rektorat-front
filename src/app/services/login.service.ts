import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  uri: string = 'http://localhost:4000';
  is_logged: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  login(username_: string, password_: string) {
    const data = {
      username: username_,
      password: password_
    }

    return this.http.post(`${this.uri}/login`, data).subscribe((response: any) => {
      if(response) {
        this.is_logged = true;
        console.log('Login')
        
        this.router.navigate(['/enroll'])
      }
    })
  }

  is_authenticated(): boolean {
    return this.is_logged;
  }
}

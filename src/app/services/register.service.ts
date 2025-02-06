import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private uri: string = 'http://localhost:4000';

  constructor(private http: HttpClient) { }
  register(username_: string, org_: string, password_: string) {
    const data = {
      username: username_,
      password: password_,
      org: org_
    }
    this.http.post(`${this.uri}/register`, data).subscribe((response: any) => {
      if(response.pass == true) {
        alert('Uspešno poslat zahtev za otvaranje naloga administratoru, ubrzo će Vam se odgovoriti na zahtev!');
      }
      else {
        alert('Korisnik sa ovim indeksom i sa ovog fakulteta već postoji')
      }
    })
  }
}

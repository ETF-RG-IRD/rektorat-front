import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {
  private uri: string = 'http://localhost:4000';
  constructor(private http: HttpClient) { }

  enroll(uid_: string, org_: string) {
    const date_ = new Date().toLocaleString()
    const data = {
      'today': date_,
      'uid': uid_,
      'org': org_
    }
    /**
     * TODO: Make modal window from this alert!
     */
    this.http.post(`${this.uri}/enroll/add`, data).subscribe((response: any) => {
      if (response) {
        if (response.new) {
          alert(`Nov student evidentiran sa indeksom ${response.uid} sa fakulteta ${response.org}. Datuma ${response.last_seen}`)
        }
        else {
          alert(`Student pronađen sa indeksom ${response.uid} sa fakulteta ${response.org}. Poslednji put viđen ${response.last_seen}`)
        }
      }
    })
  }

  log_exit(uid: string, org: string ) {
    const data = {
      'uid': uid,
      'org': org
    }

    this.http.post(`${this.uri}/enroll/logout`, data).subscribe((response: any) =>{
      if(response) {
        alert('Evidentiran izlazak studenta!')
      }
    })
  }

  check(uid_: string, org_: string) {
    const data = {
      'uid': uid_,
      'org': org_
    }


    this.http.post(`${this.uri}/enroll/check`, data).subscribe((response: any)  => {
      if (response) {
        alert(response.message);
      }
    })
  }
}

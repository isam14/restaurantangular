import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token: string;


  constructor(private http: HttpClient) {

  }

  connexion (username: string, password: string) {
      // return this.http.get('https://jsonplaceholder.typicode.com/users')
    return this.http.post('http://localhost:8000/api/login_check',
      {
        headers: new HttpHeaders ({
        "Content-Type": "application/json"
        }),
        body: {
          "username": 'admin',
          "password": 'admin'
        }
    }
    ).subscribe(
      data => {
      this.token = data["token"], 
          console.log(data)
      }
    )
  };
}

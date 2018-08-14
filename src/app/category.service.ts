import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  constructor(private http: HttpClient) { }

  getUsers() {
    // return this.http.get('https://jsonplaceholder.typicode.com/users')
    return this.http.get('http://localhost:8000/api/categories')
  }
}

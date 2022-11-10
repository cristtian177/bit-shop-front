import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})

export class UserService {

  URL_API = 'http://localhost:5000/user'
  products: any
  currentProduct: User

  constructor( public http: HttpClient) {
    this.currentProduct = new User()
  }

  createUser(data: User){
    return this.http.post(`${this.URL_API}/create-user`, data)
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  URL_API = 'http://localhost:5000/user'
  user: any
  currentUser: User

  constructor( public http: HttpClient) {
    this.currentUser = new User()
  }
  
  getUser(){
    return this.http.get(`${this.URL_API}/get-user?email=${this.currentUser.email}&&password=${this.currentUser.password}`) 
  }

  createUser(data: User){
    return this.http.post(`${this.URL_API}/create-user`, data)
  }
}
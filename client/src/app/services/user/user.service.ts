import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { user } from '../../models/user/User'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URI = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getUser(){
    let id = localStorage.getItem("ACCESS_TOKEN")
    return this.http.get(`${this.API_URI}/api/user/${id}`)
  }

  updateUser(userData){
    let id = localStorage.getItem("ACCESS_TOKEN")
    return this.http.put(`${this.API_URI}/api/user/${id}`, userData);
  }

}

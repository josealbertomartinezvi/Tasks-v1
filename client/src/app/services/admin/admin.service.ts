import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  API_URI = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getAdmin(){
    let id = localStorage.getItem("ACCESS_TOKEN")
    return this.http.get(`${this.API_URI}/api/user/${id}`)
  }
}

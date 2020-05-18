import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  API_URI = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getUsersList(){
    let id = [{"id": localStorage.getItem("ACCESS_TOKEN")}]
    return this.http.post(`${this.API_URI}/api/users`, id)
  }

  deleteUser(id){
    return this.http.delete(`${this.API_URI}/api/user/${id}`)
  }
}

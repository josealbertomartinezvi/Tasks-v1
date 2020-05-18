import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  API_URI = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getTasks(){
    let id = localStorage.getItem("ACCESS_TOKEN")
    return this.http.get(`${this.API_URI}/api/user/${id}/tasks`)
  }

  addTask(task){
    let id = localStorage.getItem("ACCESS_TOKEN")
    let req = {'task': task.task, 'description': task.description, 'user_id': id}
    return this.http.post(this.API_URI + '/api/task', req);
  }

  showTask(id){
    return this.http.get(this.API_URI + '/api/task/' + id);
  }

  deleteTask(id){
    return this.http.delete(this.API_URI + '/api/task/' + id);
  }


}

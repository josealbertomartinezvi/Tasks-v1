import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../app.component'

import { TaskService } from '../../../services/user/task/task.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: any = []
  task = {
    id: null,
    task: '',
    description: ''
  }

  constructor(private appComponent: AppComponent, private router: Router, private taskService: TaskService) { }

  ngOnInit() {
    
    this.appComponent.adminNavBar = true 
    this.appComponent.authNavBar = true
    this.appComponent.userNavBar = false 
    
    let token = localStorage.getItem("ACCESS_TOKEN")
    if(token != null){
      this.getTasks()  
    }else{
      this.router.navigate(['/'])
    }
  }

  getTasks(){
    this.taskService.getTasks().subscribe(
      res =>{
        this.tasks = res
      },
      err => {
        alert(err.error.message)
      }
    )
  }

  createTask(){
    delete this.task.id
    
    this.taskService.addTask(this.task).subscribe(
      res =>{
        this.getTasks()
      },
      err => {
        
      }
    )
  }

  showTask(id){
    this.taskService.showTask(id).subscribe(
        res =>{
          this.task.id = res['id']
          this.task.task = res['task']
          this.task.description = res['description']
        },
        err => {
          
        }
      )
  }

  deleteTask(id){
    this.taskService.deleteTask(id).subscribe(
        res =>{
            // alert('Task Deleted')
            this.getTasks()
        },
        err => {
            
        }
      )
  }

//   updateUser(){
//     this.updatedData.id = this.data.id
//     //console.log(this.updatedData)
//     this.userService.updateUser(this.updatedData)
//       .subscribe(
//         res => {
//           //alert('User Updated Sussefuly')
//           this.data = res
//           console.log(this.data)
//         },
//         err => {
//           //this.loading = false;
//           if(err.status == '422'){
//             alert('There are empty fields')
//           }
          
//         }
//       );    

//   }

}

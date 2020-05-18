import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component'

import { UserService } from '../../services/user/user.service'
import { Router } from '@angular/router';

import { user } from '../../models/user/User'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  data: any = []
  updatedData: user = {
    id: null,
    document_id: '',
    name: '',
    last_name: '',
    age: null,
    email: '',
    phone: '',
    address: '',
    city: '',
    password: ''
  }

  constructor(private appComponent: AppComponent, private router: Router, private userService: UserService) { }

  ngOnInit() {
    
    this.appComponent.adminNavBar = true 
    this.appComponent.authNavBar = true
    this.appComponent.userNavBar = false 
    
    let token = localStorage.getItem("ACCESS_TOKEN")
    if(token != null){
      this.getUser()  
    }else{
      this.router.navigate(['/'])
    }
  }

  getUser(){
    this.userService.getUser().subscribe(
      res =>{
        this.data = res
      },
      err => {
        alert(err.error.message)
      }
    )
  }

  updateUser(){
    //console.log(this.updatedData)
    this.userService.updateUser(this.updatedData)
      .subscribe(
        res => {
          alert('User Updated Sussefuly')
          this.data = res
          console.log(this.data)
        },
        err => {
          if(err.status == '422'){
            alert('There are empty fields')
          }
          if(err.status == '400'){
            alert('Email already to exist or missing data')
          }
          
        }
      );    

  }

}

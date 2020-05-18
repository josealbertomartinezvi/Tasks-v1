import { Component, OnInit } from '@angular/core';

import { SignUp } from '../../../models/auth/SignUp';

import { Router } from '@angular/router';

import { SignUpService } from '../../../services/auth/signUp/sign-up.service';

import { AppComponent } from '../../../app.component'


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  sign_Up: SignUp = {
    id: null,
    document_id: null,
    name: '',
    last_name: '',
    age: null,
    email: '',
    phone: '',
    address: '',
    city: '',
    password: ''
  }  

  constructor(private signUpService: SignUpService, private router: Router, private appComponent: AppComponent) { }

  ngOnInit() {
    this.appComponent.adminNavBar = true 
    this.appComponent.authNavBar = false
    this.appComponent.userNavBar = true
    
    let token = localStorage.getItem("ACCESS_TOKEN")
    if(token){
       this.router.navigate(['/user'])
    }else{
      
    }
  }

  signUp(){
    
    delete this.sign_Up.id;
    //this.loading = true;
    this.signUpService.signUp(this.sign_Up)
      .subscribe(
        res => {
          alert('Register Sussefuly')
          this.router.navigate(['/signIn']);
        },
        err => {
          //this.loading = false;
          if(err.status == '422'){
            alert('There are empty fields')
          }
          
        }
      );    
  }  

}

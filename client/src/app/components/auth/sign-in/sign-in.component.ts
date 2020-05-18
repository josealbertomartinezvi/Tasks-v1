import { Component, OnInit } from '@angular/core';

import { SignIn } from '../../../models/auth/SignIn';

import { Router } from '@angular/router';

import { SignInService } from '../../../services/auth/signIn/sign-in.service';

import { AppComponent } from '../../../app.component'


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  

  sign_In: SignIn = {
    email: '',
    password: ''
  }  

  constructor(private signInService: SignInService, private router: Router, private appComponent: AppComponent) { }

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

  signIn(){
    //this.loading = true;
    this.signInService.signIn(this.sign_In)
      .subscribe(
        res => {
          if(res){
            let role = localStorage.getItem("ROLE");
            if(role == 'user'){
              this.router.navigate(['/user'])
            }else{
              this.router.navigate(['/admin'])
            }
            
          }else{
            alert('wrong data')
          }
          
        },
        err => {
          if(err.status == '500'){
            alert('User doesnt registered or wrong data')
          }
          if(err.status == '400'){
            alert('wrong data')
          }
        }
      );    

     
  }   

}

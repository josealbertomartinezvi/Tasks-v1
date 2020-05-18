import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../../app.component'

import { AdminService } from '../../services/admin/admin.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  data: any = []

  constructor(private appComponent: AppComponent, private router: Router, private adminServices: AdminService) { }

  ngOnInit() {
    this.appComponent.adminNavBar = false
    this.appComponent.authNavBar = true
    this.appComponent.userNavBar = true 
    
    let token = localStorage.getItem("ACCESS_TOKEN")
    if(token != null){
      this.getAdmin()  
    }else{
      this.router.navigate(['/'])
    }    

  }

  getAdmin(){
      this.adminServices.getAdmin().subscribe(
        res =>{
          this.data = res
        },
        err => {
          alert(err.error.message)
          //this.router.navigate(['/'])
        }
      )
  }

}

import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../../../app.component';
import { UserListService } from  '../../../services/admin/userList/user-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  data: any = []

  constructor(private appComponent: AppComponent, private router: Router , private userListService: UserListService) { }

  ngOnInit() {
    this.appComponent.adminNavBar = false
    this.appComponent.authNavBar = true
    this.appComponent.userNavBar = true 

    let token = localStorage.getItem("ACCESS_TOKEN")
    if(token != null){
      this.getUsers()  
    }else{
      this.router.navigate(['/'])
    }  
  }

  getUsers(){
    this.userListService.getUsersList().subscribe(
      res =>{
        this.data = res
        console.log(this.data)
      },
      err => {
        alert(err.error.message)
        //this.router.navigate(['/'])
      }
    )
}

  deleteUser(id){
    let confirmation = confirm("Press OK to confirm");
  
    if(confirmation){
      this.userListService.deleteUser(id).subscribe(
        res =>{
          console.log(this.data)
          this.getUsers()
        },
        err => {
          //alert(err.error.message)
          //this.router.navigate(['/'])
        }
      )
    }
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  private _authNavBar: boolean
  private _userNavBar: boolean
  private _adminNavBar: boolean

  constructor() { }

  get adminNavBar(): boolean {
    return this._adminNavBar
  }

  set adminNavBar(adminNavBar: boolean){
    this._adminNavBar = adminNavBar
  }

  get authNavBar(): boolean {
    return this._authNavBar
  }

  set authNavBar(authNavBar: boolean){
    this._authNavBar = authNavBar
  }

  get userNavBar(): boolean {
    return this._userNavBar
  }

  set userNavBar(userNavBar: boolean){
    this._userNavBar = userNavBar
  }  
}

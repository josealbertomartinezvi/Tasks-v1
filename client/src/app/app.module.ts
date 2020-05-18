import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthNavigationComponent } from './components/navigation/auth-navigation/auth-navigation.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { SignOutComponent } from './components/auth/sign-out/sign-out.component';
import { UserNavigationComponent } from './components/navigation/user-navigation/user-navigation.component';
import { UserComponent } from './components/user/user.component';
import { AdminNavigationComponent } from './components/navigation/admin-navigation/admin-navigation.component';
import { AdminComponent } from './components/admin/admin.component';
import { UsersListComponent } from './components/admin/users-list/users-list.component';
import { TaskComponent } from './components/user/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthNavigationComponent,
    SignInComponent,
    SignUpComponent,
    UserNavigationComponent,
    UserComponent,
    SignOutComponent,
    AdminNavigationComponent,
    AdminComponent,
    UsersListComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components imported
import { SignInComponent } from './components/auth/sign-in/sign-in.component'
import { SignUpComponent } from './components/auth/sign-up/sign-up.component'
import { UserComponent } from './components/user/user.component'
import { AdminComponent } from './components/admin/admin.component'
import { UsersListComponent } from './components/admin/users-list/users-list.component'
import { SignOutComponent } from './components/auth/sign-out/sign-out.component'
import { TaskComponent } from './components/user/task/task.component'

const routes: Routes = [
  {
    path: '', 
    redirectTo: '/',
    pathMatch: 'full' 
  }, 
  {
    path: '',
    component: SignInComponent
  },  
  {
    path: 'signIn',
    component: SignInComponent
  },   
  {
    path: 'signUp',
    component: SignUpComponent
  },   
  {
    path: 'user',
    component: UserComponent
  }, 
  {
    path: 'signOut',
    component: SignOutComponent
  },   
  {
    path: 'admin',
    component: AdminComponent
  }, 
  {
    path: 'users',
    component: UsersListComponent
  }, 
  {
    path: 'tasks',
    component: TaskComponent
  },          
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

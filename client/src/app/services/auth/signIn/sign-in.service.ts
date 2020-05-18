import { Injectable } from '@angular/core';

import { SignIn } from '../../../models/auth/SignIn';

import { HttpClient} from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  API_URI = 'http://localhost:8000/';

  constructor(private http: HttpClient) {  }

  signIn(signIn: SignIn){
    return this.http.post(this.API_URI + 'api/login', signIn)
    .pipe(tap(
      (res: []) => {
        if(res){
          localStorage.setItem("ACCESS_TOKEN", res['user']);
          localStorage.setItem("ROLE", res['role']);
        }
      }
    ));   
  }
}

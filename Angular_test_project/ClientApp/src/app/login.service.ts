import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly Url = "https://localhost:7010/"; //current backend file path

  constructor(private http: HttpClient) { } //use httpclieant to call the controller methods indirectly

  public loggedin: boolean = false; //has the user signed in successfully

  checkLogin(user:string, password:string): boolean { //check that a user exsits with the following credentials 
    return this.loggedin = (user === 'User' && password === '123');
  }

  isLoggedin(): boolean { //has the user alreaded signed in?
    return this.loggedin;
  }
}

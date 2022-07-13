import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly Url = "https://localhost:7010/"; //current backend file path

  constructor(private http: HttpClient) { } //use httpclieant to call the controller methods indirectly

  checkLogin(user:string, password:string): boolean { //check that a user exsits with the following credentials 
    return user === 'User' && password === '123';
  }
}

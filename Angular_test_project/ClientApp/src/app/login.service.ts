import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly Url = "https://localhost:7010/"; //current backend file path

  constructor(private http: HttpClient) { }

  checkLogin(user:string, password:string): boolean {
    return true;
  }
}

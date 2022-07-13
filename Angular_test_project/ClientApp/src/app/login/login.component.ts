import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ftext: string = '';
  fpassword: string = '';
  loggedin: boolean = false;

  constructor(private login : LoginService) { }

  ngOnInit(): void {
  }

  attemptLogin(): void {
    this.loggedin = this.login.checkLogin(this.ftext, this.fpassword);
  }
}

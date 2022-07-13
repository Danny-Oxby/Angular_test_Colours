import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ftext: string = '';
  fpassword: string = '';
  loggedin: boolean = false; //is a vaild user logged in?

  constructor(private login: LoginService, private router: Router) { } //importing router allows the html link to be manipulated from the .ts file

  ngOnInit(): void {
  }

  attemptLogin(): void {
    this.loggedin = this.login.checkLogin(this.ftext, this.fpassword);

    if (this.loggedin) {
      this.router.navigateByUrl('/home');
    }
  }
}

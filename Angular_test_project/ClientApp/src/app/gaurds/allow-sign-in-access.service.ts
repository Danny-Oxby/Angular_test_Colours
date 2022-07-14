import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})

// found from https://codecraft.tv/courses/angular/routing/router-guards/ 
export class AllowSignInAccessService implements CanActivate {

  constructor(private login : LoginService) { }

    canActivate() : boolean {
      console.log("OnlyLoggedInUsers");
      if (this.login.isLoggedin()) {
        return true;
      } else {
        window.alert("You must login to view this page");
        return false;
      }
    }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  readonly Url = "https://localhost:7010/"; //current backend file path

  constructor(private http: HttpClient) //create and assign a private http variable
  {
  }

  getList() {
    return this.http.post<string>(this.Url + "api/Input", "input"); //find the api / controller file (contorller files do not have their 'controller' tag in their url's)
  }
}

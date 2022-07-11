import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Icolour } from './models/Icolour';

@Injectable({
  providedIn: 'root'
})
export class ColourService {
  readonly Url = "https://localhost:7010/"; //current backend file path

  constructor(private http: HttpClient) //create and assign a private http variable
  {
  }

  getList(): Observable<Icolour> {
    return this.http.get<Icolour>(this.Url + "api/colour"); //find the api / controller file (contorller files do not have their 'controller' tag in their url's)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISampleModel } from './models/SampleModel';


@Injectable({
  providedIn: 'root'
})
export class TextService {

  readonly Url = "https://localhost:7010/"; //current backend file path

  constructor(private http: HttpClient) //create and assign a private http variable
  {
  }

  postString() {
    this.http.post(this.Url + "api/Input", "input"); //find the api / controller file (contorller files do not have their 'controller' tag in their url's)
  }

  getBatch(search: number): Observable<ISampleModel> {
    return this.http.get<ISampleModel>(this.Url + "api/Input/" + search); //cast the return as type ISampleModel
  }
}

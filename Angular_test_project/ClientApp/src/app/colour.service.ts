import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColourService {
  //private headers: HttpHeaders;
  readonly Url = "https://localhost:7010/";

  constructor(private http: HttpClient)
  {
/*    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });*/
  }

  getList() {
    return this.http.get(this.Url + "api/colour");/*, { headers: this.headers }*/
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class apicoloursService {

  readonly colourAPIUrl = "https://localhost:44403/Controllers/ColourController";

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.colourAPIUrl);
  }
}

/*
 * @Inject('BASE_URL')
 */

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISampleModel } from './models/SampleModel';


@Injectable({
  providedIn: 'root'
})
export class TextService {

  readonly Url = "https://localhost:7010/"; //current backend file path
  //reqHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) //create and assign a private http variable
  {
  }

  postString() : /*string*/ Observable<string> { 
    return this.http.post(this.Url + "api/Input", "input", { observe: 'body', responseType: 'text' }); //find the api / controller file (contorller files do not have their 'controller' tag in their url's)
  }

  //alternative multi parameter methods https://www.telerik.com/blogs/how-to-pass-multiple-parameters-get-method-aspnet-core-mvc
  getTwoInput2(value: string, input: string): Observable<string> { //BEING RETRUNED AS JSON RATHER THAN TEXT
    const param = new HttpParams()
      .set('value', value)
      .set('input', input);
    return this.http.get(this.Url + "api/Input/GetTwoInput", { params: param, observe: 'body', responseType: 'text' }); //one method of passing mulitple parameters to a get method
  }

  getTwoInput(value: string, input: string): Observable<string> { //this method is not the prefered way but still works
    //seting the response type as text and removing the cast is useful for type returns but use casting for models intead
    return this.http.get(this.Url + "api/Input/GetTwoInput?value=" + value + "&&input=" + input, { observe: 'body', responseType: 'text' } ); //one method of passing mulitple parameters to a get method
  }


  getBatch(search: number): Observable<ISampleModel> {
    //dons't need the repose type since the Json default type can be converted to a model
    return this.http.get<ISampleModel>(this.Url + "api/Input/" + search); //cast the return as type ISampleModel
  }
}

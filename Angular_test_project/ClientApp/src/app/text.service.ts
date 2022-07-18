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

  //this may be an issue in the future when post testing https://stackoverflow.com/questions/46408537/angular-httpclient-http-failure-during-parsing
  postString() : /*string*/ Observable<string> { 
    return this.http.post<string>(this.Url + "api/Input", "input"); //find the api / controller file (contorller files do not have their 'controller' tag in their url's)
  }

  //alternative multi parameter methods https://www.telerik.com/blogs/how-to-pass-multiple-parameters-get-method-aspnet-core-mvc
  getTwoInput2(value: string, input: string): Observable<string> { //ISSUE BEING RETRUNED AS JSON RATHER THAN TEXT
    const params = new HttpParams()
      .set('value', value)
      .set('input', input);
    return this.http.get<string>(this.Url + "api/Input/GetTwoInput", { params }); //one method of passing mulitple parameters to a get method
  }

  getTwoInput(value: string, input: string): Observable<string> { //ISSUE BEING RETRUNED AS JSON RATHER THAN TEXT
    return this.http.get<string>(this.Url + "api/Input/GetTwoInput?value=" + value + "&&input=" + input, ); //one method of passing mulitple parameters to a get method
  }


  getBatch(search: number): Observable<ISampleModel> {
    return this.http.get<ISampleModel>(this.Url + "api/Input/" + search); //cast the return as type ISampleModel
  }
}

/*import { apicoloursService } from '../apicolours.service';*/
import { Component, OnInit, Inject } from '@angular/core';
import { ColourService } from '../colour.service';
import { Icolour } from '../models/Icolour';


@Component({ // link the ts file with its html, css and selectpr files
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers : []
})

export class HomeComponent implements OnInit {
  colourlist: Icolour[] = [];
  thing: any;

  constructor(private Colour: ColourService, @Inject('BASE_URL') baseUrl: string) //alternate way of creating a local varibale
  {
  }
    /*
         constructor(http: http, @Inject('BASE_URL') baseUrl: string) {
      http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
        this.forecasts = result;
      }, error => console.error(error));
    }
     */

  ngOnInit(): void {
    this.Colour.getList().subscribe(
      (response) => {
        this.thing = response;
        this.colourlist = this.thing;
      },
      (error) => {
        console.log(error);
      });

  }
}

//this.apiColour.getPosts().subscribe(
    //  (response) => { this.thing = response; },
    //  (error) => { console.log(error); });

    //  let red: Icolour;
    //  red = {
    //    colour: "red",
    //    hexvalue: "#red"
    //  };
    //  this.colourlist.push(red);

    //  let blue: Icolour;
    //  blue = {
    //    colour: "blue",
    //    hexvalue: "#blue"
    //  };
    //  this.colourlist.push(blue);

    //  let green: Icolour;
    //  green = {
    //    colour: "green",
    //    hexvalue: "#green"
    //  };
    //  this.colourlist.push(green);


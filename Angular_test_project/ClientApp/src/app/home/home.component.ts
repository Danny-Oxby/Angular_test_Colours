import { Component, OnInit, Inject } from '@angular/core';
import { ColourService } from '../colour.service';
import { Icolour } from '../models/Icolour';
import { ISampleModel } from '../models/SampleModel';
import { TextService } from '../text.service';


@Component({ // link the ts file with its html, css and selector files
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers : []
})

export class HomeComponent implements OnInit {
  colourlist: Icolour[] = []; //create an array of colour interface's
  sampleList: ISampleModel[] = [];
  thing: any;
  clicktext: string = "";

  constructor(private Colour: ColourService, private Text: TextService, @Inject('BASE_URL') baseUrl: string) //alternate way of creating a local varibale
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
        this.thing = response; //returns the subsciption value as an object
        this.colourlist = this.thing;
      },
      (error) => {
        console.log(error);
      });

    this.Text.getBatch(528).subscribe(
      (response) => {
        this.thing = response; //returns the subsciption value as an object
        this.sampleList = this.thing;
      },
      (error) => {
        console.log(error);
      });
  }

  CLickMethod() {
    this.clicktext = "clicked";

    this.Text.postString();
    //this.Text.postString().subscribe(
    //  (response) => {
    //    console.log(response);
    //  },
    //  (error) => {
    //    console.log(error);
    //  });
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


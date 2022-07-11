import { Component, OnInit } from '@angular/core';
import { ColourService } from '../colour.service';
import { Icolour } from '../models/Icolour';

@Component({
  selector: 'app-colour',
  templateUrl: './colour.component.html',
  styleUrls: ['./colour.component.css']
})
export class ColourComponent implements OnInit {

  colourlist: Icolour[] = []; //create an array of colour interface's
  thing: any;

  constructor(private Colour: ColourService) { }

  ngOnInit(): void {
    this.Colour.getList().subscribe(
      (response) => {
        this.thing = response; //returns the subsciption value as an object
        this.colourlist = this.thing;
      },
      (error) => {
        console.log(error);
      });
  }

}

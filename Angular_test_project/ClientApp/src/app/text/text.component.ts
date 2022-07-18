import { Component, OnInit } from '@angular/core';
import { ISampleModel } from '../models/SampleModel';
import { TextService } from '../text.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  thing: any;
  sampleList: ISampleModel[] = [];
  clicktext: string = "";

  constructor(private Text: TextService) { }

  ngOnInit(): void {
    this.Text.getBatch(528).subscribe(
      (response) => {
        this.thing = response; //returns the subsciption value as an object
        this.sampleList = this.thing;
      },
      (error) => {
        console.log(error);
      });

    this.Text.getTwoInput("a", "b").subscribe(
      (response) => {
        this.thing = response; //returns the subsciption value as an object
        this.clicktext = this.thing;
      },
      (error) => {
        console.log(error);
      });
  }

  CLickMethod() {
    this.Text.postString().subscribe(
      (response) => {
        this.thing = response[0]; //returns the subsciption value as an object
        this.clicktext += this.thing + " ";
      },
      (error) => {
        console.log(error);
      });
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

  ftext: string = '';
  fnumber: number = 0;
  fdate: number = Date.now();
  femail: string = '';
  fpassword: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  Check(): void {
    this.ftext = this.ftext;
    this.fnumber = this.fnumber;
    this.fdate = this.fdate;
    this.femail = this.femail;
    this.fpassword = this.fpassword;
  }
}

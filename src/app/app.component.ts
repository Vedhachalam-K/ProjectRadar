import { Component } from '@angular/core';
import { RadarInput } from './models/RadarInput';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  n: number = 10;
  nn: number = this.n;
  j: number = this.n - 1;
  k: number = 0;

  content: string[][];
  content2: string[][];

  ri: RadarInput = new RadarInput();
  result: string = "";

  constructor() {
    this.content = [];
    this.content2 = [];
    this.generateArray();
  }


  generateArray() {

    for (let i = 0; i < this.n; i++) {

      this.content[i] = [];

      let inc: number = 0;
      for (let iii = 0; iii < this.k; iii++) {
        this.content[i][inc] = " ";
        inc++;
      }

      this.content[i][inc] = "type1";
      inc++;

      for (let ii = this.j; ii >= 1; ii--) {
        this.content[i][inc] = " ";
        inc++;
      }

      this.content[i][inc] = "type2";
      inc++;

      for (let ii = this.j; ii >= 1; ii--) {
        this.content[i][inc] = " ";
        inc++;
      }

      this.content[i][inc] = "type3";
      inc++;

      this.j--;
      this.k++;
    }

    this.k = this.n - 1;

    for (let i = 1; i <= this.n; i++) {
      let inc = 0;
      this.content2[i] = [];

      for (let ii = this.k; ii > 0; ii--) {
        this.content2[i][inc] = " ";
        inc++;
      }

      this.content2[i][inc] = "type6";
      inc++;

      for (let iii = 0; iii < i - 1; iii++) {
        this.content2[i][inc] = " ";
        inc++;
      }

      this.content2[i][inc] = "type5";
      inc++;

      for (let iii = 0; iii < i - 1; iii++) {
        this.content2[i][inc] = " ";
        inc++;
      }

      this.content2[i][inc] = "type4";
      inc++;

      this.k--;
    }


    // let k=1;
    // for(let i=0;i<5;i++){
    //   this.content[i] = [];
    //   for(let j=0;j<5;j++){
    //     this.content[i][j] = "a"+k;
    //     k++;
    //   }
    // }

  }

  getGraph() {
    this.result = this.ri.type1 + " - " + this.ri.type2 + " - " + this.ri.type3 + " - " + this.ri.type4 + " - " + this.ri.type5 + " - " + this.ri.type6;
    console.log(this.result);
  }
}


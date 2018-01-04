import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-hello-case004',
  templateUrl: './case004.component.html',
  styleUrls: ['./case004.component.css']
})

export class Case004Component implements OnInit {

  counter: number;


  constructor() {
    this.counter = 0;
  }

  ngOnInit(): void {
  }

  countUp() {
    this.counter++;
  }
}

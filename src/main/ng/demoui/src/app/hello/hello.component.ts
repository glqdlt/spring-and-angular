import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})

export class HelloComponent implements OnInit {

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

import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-hello-case001',
  templateUrl: './case001.component.html',
  styleUrls: ['./case001.component.css']
})

export class Case001Component implements OnInit {

  msg : string;

  constructor() {
    this.msg = "Hello Angular";
  }

  ngOnInit(): void {
  }

}

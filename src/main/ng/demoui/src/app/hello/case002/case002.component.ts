import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-hello-case002',
  templateUrl: './case002.component.html',
  styleUrls: ['./case002.component.css']
})

export class Case002Component implements OnInit {

  msg : string;

  constructor() {
    this.msg = "Write here.."
  }

  ngOnInit(): void {
  }
}

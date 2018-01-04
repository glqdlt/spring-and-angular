import {Component, OnInit} from "@angular/core";
import {SupportService} from "../../support.service";

@Component({
  selector: 'app-hello-case005',
  templateUrl: './case005.component.html',
  styleUrls: ['./case005.component.css']
})

export class Case005Component implements OnInit {


  greeting: string;
  response: string;

  constructor(private supportService: SupportService) {
  }

  ngOnInit(): void {
  }


  sendGreeting() {
    let data = {"message": this.greeting};
    this.supportService.sendMsg(data).subscribe(result => (this.response =result.text())
      , err => (
        console.error(err))
    );
  }
}

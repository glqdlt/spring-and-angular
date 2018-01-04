import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-hello-case003',
  templateUrl: './case003.component.html',
  styleUrls: ['./case003.component.css']
})

export class Case003Component implements OnInit {

  checkNames: Array<String>;


  constructor() {
    this.checkNames = [];
  }

  ngOnInit(): void {
  }

  appendCheckNames(check) {
    if (check.checked) {
      this.checkNames.push(check.value);
    }
    if (!check.checked) {
      this.remove(check.value);
    }
  }

  remove(target) {
    let index = this.checkNames.indexOf(target);
    this.checkNames.splice(index, 1);
  }
}

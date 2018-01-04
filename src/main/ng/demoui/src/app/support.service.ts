import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class SupportService {


  apiUrl = 'http://127.0.0.1:8080/greeting/';
  private message;

  constructor(public http: Http) {
    this.message = '';
  }


  sendMsg(message) {
    return this.http.post(this.apiUrl, message);
  }
}

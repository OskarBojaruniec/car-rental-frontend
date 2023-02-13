import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  message: String;

  constructor() { }

  addPositiveMessage(message: String): void {
    this.message = message;
    const el = document.getElementById("message");
    el.className = "message-positive";
  }

  addNegativeMessage(message: String): void {
    this.message = message
    const el = document.getElementById("message");
    el.className = "message-negative";
  }
}

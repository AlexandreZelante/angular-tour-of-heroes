import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  constructor(
    // We should define it as public because it is going to be used in the component
    public messageService: MessageService
  ) { }
}

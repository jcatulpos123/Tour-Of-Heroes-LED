import { MessageService } from './../message.service';
import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
  constructor(public messageService : MessageService) {}
}

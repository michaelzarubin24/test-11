import { Component } from '@angular/core';
import { ChatService } from '../../services/chat/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
})
export class ChatComponent {
  constructor(private chatService: ChatService) {}

  getVisibility() {
    return this.chatService.getVisibility();
  }

  getMessages() {
    return this.chatService.getAll();
  }

  sendMessage(data: any) {
    return this.chatService.add(data.text);
  }
  close() {
    return this.chatService.changeVisibility();
  }
}

import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  constructor(private userService: UserService) {}

  getUsers() {
    return this.userService.getAllExceptCurrentUser();
  }
}

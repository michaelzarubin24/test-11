import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { RegistrationService } from '../../services/register/registration.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private login: string;

  constructor(
    private authService: RegistrationService,
    private userService: UserService
  ) {
    this.login = this.userService.getCurrentUser().getLogin();
  }

  logout() {
    this.authService.changeVisibility();
  }

  getLogin() {
    return this.login;
  }

  logUsers() {
    console.log(this.userService.getAll());
  }
}

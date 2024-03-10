import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { RegistrationService } from '../../services/register/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent {
  constructor(
    private userService: UserService,
    private registrationService: RegistrationService
  ) {}

  getVisibility() {
    return this.registrationService.getVisibility();
  }

  onSubmitHandler(data: any) {
    const isRegistered = this.userService.authorize(data.login, data.password);

    if (isRegistered) {
      this.registrationService.changeVisibility();
    }
  }
}

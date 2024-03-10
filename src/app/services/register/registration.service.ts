import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  private isVisible = true;

  constructor() {}

  getVisibility() {
    return this.isVisible;
  }

  changeVisibility() {
    this.isVisible = !this.isVisible;
  }
}

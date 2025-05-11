import { Component } from '@angular/core';

@Component({
  selector: 'app-account-navbar',
  templateUrl: './account-navbar.component.html'
})
export class AccountNavbarComponent {
  navbarOpen = false;

  constructor() {}

  ngOnInit(): void {}

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }
}

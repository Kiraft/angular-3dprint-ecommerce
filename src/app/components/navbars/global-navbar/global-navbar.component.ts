import { Component } from '@angular/core';

@Component({
  selector: 'app-global-navbar',
  templateUrl: './global-navbar.component.html'
})
export class GlobalNavbarComponent {
  navbarOpen = false;

  constructor() {}

  ngOnInit(): void {}

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }
}

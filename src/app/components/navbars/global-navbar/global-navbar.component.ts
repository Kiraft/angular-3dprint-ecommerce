import { AuthService } from '../../../feature/auth/services/auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-global-navbar',
  templateUrl: './global-navbar.component.html'
})
export class GlobalNavbarComponent {
  navbarOpen = false;

  constructor(private AuthService: AuthService) {

  }

  ngOnInit(): void {

  }

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }

  isAutheticate(): boolean {
    return this.AuthService.isAuthenticated()
  }
}

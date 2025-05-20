import { Router } from '@angular/router';
import { AuthService } from './../../shared/services/auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-account',
  templateUrl: './sidebar-account.component.html'
})
export class SidebarAccountComponent {

   constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}

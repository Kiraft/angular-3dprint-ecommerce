import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/account']);
    }
  }

  login(): void {
    this.authService.login(this.email, this.password).subscribe((success) => {
      if (success) {
        // Navegar a account
        this.router.navigate(['/account']);
      } else {
        // Mostrar error al usuario
        alert('Credenciales incorrectas');
      }
    });
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

interface RegisterForm {
  email: FormControl<null | string>;
  password: FormControl<null | string>;
  name: FormControl<null | string>;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  constructor(private AuthService: AuthService, private router: Router) {}
  private _formBuilder = inject(FormBuilder);

  form = this._formBuilder.group<RegisterForm>({
    email: this._formBuilder.control<string | null>('', [
      Validators.required,
      Validators.email,
    ]),
    password: this._formBuilder.control<string | null>('', [
      Validators.required,
    ]),
    name: this._formBuilder.control<string | null>('', [Validators.required]),
  });

  async submit() {
    if (this.form.invalid) return;

    const { email, password, name } = this.form.value;

    // Validación adicional para asegurar que no sean null
    if (email && password && name) {
      this.AuthService.register(email, password, name).subscribe({
        next: (isRegistered: boolean) => {
          if (isRegistered) {
           this.router.navigate(['/auth/login'])
          } else {
            console.error('Registration failed');
          }
        },
        error: (err) => {
          console.error('Error during registration', err);
        },
      });
    }
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

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
  private _formBuilder = inject(FormBuilder);
  private _authService = inject(AuthService);

  form = this._formBuilder.group<RegisterForm>({
    email: this._formBuilder.control(null, [
      Validators.required,
      Validators.email,
    ]),

    password: this._formBuilder.control(null, [Validators.required]),
    name: this._formBuilder.control(null, [Validators.required]),
  });

  async submit() {
    if (this.form.invalid) return;

    const authRespose = await this._authService.signUp({
      email: this.form.value.email ?? '',
      password: this.form.value.password ?? '',
    });

    console.log(
      authRespose
    );

  }
}

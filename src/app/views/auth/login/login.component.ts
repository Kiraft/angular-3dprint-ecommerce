import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private router: Router) {}
  login() {
    if (this.email === 'kiraft' && this.password === '1234') {
      this.router.navigate(['/account']);
    } else {
      alert('Credenciales incorrectas');
    }
  }
  ngOnInit(): void {}
}

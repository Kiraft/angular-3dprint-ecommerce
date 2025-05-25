import { AuthService } from './../../../../auth/services/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import LoginResponse from '../../../interfaces/LoginResponse';
import User from '../../../interfaces/User';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit{

  userData$!: Observable<User>;
  idUser: number | undefined;

  constructor(private http: HttpClient, private AuthService: AuthService) {
    this.idUser = this.AuthService.getUserIdentity()?.id;
  }

  ngOnInit(): void {
    this.userData$ = this.http.get<User>(`http://localhost:8080/api/v1/users/${this.idUser}`); // O usa `/api/v1/users/${this.idUser?.data.id}`
  }

  showModelEditProfile: Boolean = false;

  openModalEditProfile() {
    this.showModelEditProfile = true;
  }

  closeModalEditProfile() {
    this.showModelEditProfile = false;
  }

}

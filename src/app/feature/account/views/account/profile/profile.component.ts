import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {

  showModelEditProfile: Boolean = false;

  openModalEditProfile() {
    this.showModelEditProfile = true;
  }

  closeModalEditProfile() {
    this.showModelEditProfile = false;
  }

}

import { AddressService } from './../../../services/address.service';
import { Component } from '@angular/core';
import { AddressReponse } from '../../../interfaces/AddressResponse';
import UserState from '../../../interfaces/UserState';
import { AuthService } from '../../../../auth/services/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html'
})
export class AddressComponent {
  addresses$: Observable<AddressReponse[]>;
  userData: UserState | null;
  stateModal: boolean = false;

  constructor(
    private addressService: AddressService,
    private authService: AuthService
  ) {
    this.userData = this.authService.getUserIdentity();

    // 👉 Obtenemos el observable reactivo del servicio
    this.addresses$ = this.addressService.addresses$;

    // 👉 Cargamos los datos del usuario solo una vez
    if (this.userData?.id) {
      this.addressService.loadAddressesByClientId(this.userData.id);
    }
  }

  showModal() {
    this.stateModal = true;
  }

  closeModal() {
    this.stateModal = false;
  }
}

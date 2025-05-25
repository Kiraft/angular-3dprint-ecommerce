import { Component } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html'
})
export class AddressComponent {
  stateModal: boolean = false;

  showModal() {
    this.stateModal = true
  }

  closeModal(){
    this.stateModal = false;

  }
}

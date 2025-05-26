import { AddressService } from './../../services/address.service';
import { Component, Input } from '@angular/core';
import { AddressReponse } from '../../interfaces/AddressResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrl: './address-card.component.css'
})
export class AddressCardComponent {
  @Input() address!: AddressReponse;

  constructor(private AddressService: AddressService, private router: Router) {

  }
  delete(id: number){
    this.AddressService.deleteAddress(id).subscribe({
    next: () => console.log('Dirección eliminada'),
    error: (err) => console.error('Error al eliminar', err)
  });
  }

    update(id: number) {
      this.router.navigate([`/account/address/form/${id}`])
  }
}

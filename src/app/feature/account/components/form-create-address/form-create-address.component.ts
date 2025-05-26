import { AuthService } from './../../../auth/services/auth/auth.service';
import { AddressReponse } from './../../interfaces/AddressResponse';
import { AddressService } from './../../services/address.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import UserState from '../../interfaces/UserState';

@Component({
  selector: 'app-form-create-address',
  templateUrl: './form-create-address.component.html',
  styleUrl: './form-create-address.component.css',
})
export class FormCreateAddressComponent {
  myFormAddress!: FormGroup;
  isEdit = false;
  addressId: string | null = null;
  userData!: UserState | null;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private addressService: AddressService,
    private AuthService: AuthService,
    private routerNavigate: Router
  ) {}

  ngOnInit() {
    this.addressId = this.route.snapshot.paramMap.get('id');
    this.isEdit = !!this.addressId;
    this.userData = this.AuthService.getUserIdentity();

    // 1. Inicializa el formulario vacío
    this.myFormAddress = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(44)]],
      lastname: ['', [Validators.required, Validators.maxLength(44)]],
      phone: ['', [Validators.required, Validators.maxLength(44)]],
      codePhone: ['', [Validators.required, Validators.maxLength(44)]],
      city: ['', [Validators.required, Validators.maxLength(44)]],
      cp: ['', [Validators.required, Validators.maxLength(44)]],
      col: ['', [Validators.required, Validators.maxLength(44)]],
      address: ['', [Validators.required, Validators.maxLength(44)]],
    });

    // 2. Si es edición, carga los datos
    if (this.isEdit && this.addressId) {
      this.addressService.getAddressById(this.addressId).subscribe({
        next: (address: AddressReponse) => {
          this.myFormAddress.patchValue({
            name: address.name,
            lastname: address.lastname,
            phone: address.phone,
            codePhone: address.codePhone,
            city: address.city,
            cp: address.cp,
            col: address.col,
            address: address.address,
          });
        },
        error: (err) => {
          console.error('Error al cargar la dirección', err);
        },
      });
    }
  }

  submit() {
    console.log('funciona el boton');

    if (this.myFormAddress.invalid) {
      this.myFormAddress.markAllAsTouched();
      console.log('lo valido');
      return;
    }

    const formData = this.myFormAddress.value;

    if (this.isEdit && this.addressId) {
      console.log('Se va actualizar');
      console.log(formData);
      console.log(this.addressId);

      this.addressService
        .updateAddress(parseInt(this.addressId), formData)
        .subscribe({
          next: (res) => {
            this.routerNavigate.navigate(['/account/address']);
            console.log('Direccion actualizada');
          },
          error: (err) => {
            console.log('error al actualizar');
          },
        });
    } else {
      if (this.userData?.id != null) {
        console.log('Se va a crear');
        console.log(formData);
        console.log(this.userData?.id);
        this.addressService
          .createAddress(this.userData?.id, formData)
          .subscribe({
            next: (res) => {
              this.routerNavigate.navigate(['/account/address']);
            },
            error: (err) => {
              console.error('Error al crear la dirección', err);
            },
          });
      }
    }
  }
}

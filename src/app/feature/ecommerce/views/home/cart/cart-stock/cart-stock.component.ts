import { AuthService } from './../../../../../auth/services/auth/auth.service';
import { CountriesCodesService } from './../../../../../../shared/services/countries-codes.service';
import { UploadFilesService } from '../../../../store/upload-files.service';
import { ModalUploadServiceService } from '../../../../store/modal-upload-service.service';
import { AuthComponent } from '../../../../../auth/layouts/auth/auth.component';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import File3DModel from '../../../../interfaces/File3DModel';
import { firstValueFrom, from, Observable } from 'rxjs';
import Swal from 'sweetalert2';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import UserAddress from '../../../../interfaces/UserAddress';
import CountryCode from '../../../../../../shared/interfaces/CountryCode';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../../environments/environment.development';
import { AddressReponse } from '../../../../../account/interfaces/AddressResponse';

@Component({
  selector: 'app-cart-stock',
  templateUrl: './cart-stock.component.html',
})
export class CartStockComponent {
  loading = false;
  filesList$: Observable<File3DModel[]>;
  modalType$ = this.ModalUploadServiceService.getModalType();
  myFormData: FormGroup;
  countriesCode$: Observable<CountryCode[]>;

  constructor(
    private fb: FormBuilder,
    private ModalUploadServiceService: ModalUploadServiceService,
    private router: Router,
    private UploadFilesService: UploadFilesService,
    private AuthService: AuthService,
    private CountriesCodesService: CountriesCodesService,
    private http: HttpClient
  ) {
    this.countriesCode$ = this.CountriesCodesService.getCountryCodes();
    this.filesList$ = this.UploadFilesService.getFileUploadList();
    this.myFormData = this.fb.group({
      tipo: [''],
      name: ['', Validators.required],
      lastname: [''],
      phone: [''],
      phoneCode: [''],
      city: [''],
      cp: [''],
      col: [''],
      address: [''],
    });

    this.savedAddresses = this.http.get<AddressReponse[]>(
      `${environment.springURL}/users/${
        this.AuthService.getUserIdentity()?.id
      }/address`
    );
  }

  direccionGuardadaControl = new FormControl<number | null>(-1);

  savedAddresses: Observable<AddressReponse[]>;

  crearCotizacion() {
    if (!this.AuthService.isAuthenticated()) {
      setTimeout(() => {
        this.router.navigate(['/auth/login']);
      }, 2000);
      return;
    }
    if (this.UploadFilesService.isEmpty()) {
      Swal.fire({
        icon: 'error',
        title: 'No puedes crear una cotizacion',
        text: 'Agregar o subi un modelo',
        footer: '<a href="/stock">Ir a stock</a>',
      });
      return;
    }

    if (!this.myFormData.valid) {
      Swal.fire({
        title: 'Direccion no valida',
        text: 'Llena la informacion de tu tarjeta',
        icon: 'question',
      });
      return;
    }

    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      const dataform = this.myFormData.value;
      this.UploadFilesService.clearFiles();
      this.router.navigate(['/cart/confirm'], {
        queryParams: {
          name: dataform.name,
          lastname: dataform.lastname,
          phoneCode: dataform.phoneCode,
          phone: dataform.phone,
          date: Date.now,
          address: dataform.address,
          city: dataform.city,
        },
      });
    }, 2000);
  }

  async onSelectSavedAddress(value: number | string | null) {
    const index = typeof value === 'string' ? parseInt(value, 10) : value;
    if (index === null || isNaN(index) || index === -1) return;

    try {
      const addresses = await firstValueFrom(this.savedAddresses);
      console.log(addresses);

      const selected = addresses[index];

      if (selected) {
        this.myFormData.patchValue({
          name: selected.name,
          lastname: selected.lastname,
          phone: selected.phone,
          phoneCode: selected.codePhone,
          city: selected.city,
          cp: selected.cp,
          col: selected.col,
          address: selected.address,
        });
      }
    } catch (error) {
      console.error('Error fetching saved addresses', error);
    }
  }
}

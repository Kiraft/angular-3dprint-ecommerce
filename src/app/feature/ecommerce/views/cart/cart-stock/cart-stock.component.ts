import { UploadFilesService } from '../../../store/upload-files.service';
import { ModalUploadServiceService } from '../../../store/modal-upload-service.service';
import { AuthService } from '../../../../auth/services/auth/auth.service';
import { AuthComponent } from '../../../../auth/layouts/auth/auth.component';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import File3DModel from '../../../interfaces/File3DModel';
import { from, Observable } from 'rxjs';
import Swal from 'sweetalert2';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

interface SavedAddress {
  name: string;
  lastname: string;
  phone: string;
  phoneCode: string;
  city: string;
  cp: string;
  col: string;
  address: string;
}

@Component({
  selector: 'app-cart-stock',
  templateUrl: './cart-stock.component.html',
})
export class CartStockComponent {
  loading = false;
  filesList$: Observable<File3DModel[]>;
  modalType$ = this.ModalUploadServiceService.getModalType();
  myFormData: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ModalUploadServiceService: ModalUploadServiceService,
    private router: Router,
    private UploadFilesService: UploadFilesService,
    private AuthService: AuthService
  ) {
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
  }

  direccionGuardadaControl = new FormControl<number | null>(-1);

  savedAddresses = [
    {
      name: 'Juan',
      lastname: 'Pérez',
      phone: '555-123-45-67',
      phoneCode: '+52',
      city: 'Ciudad de México',
      cp: '03100',
      col: 'Roma Sur',
      address: 'Calle Falsa #123',
    },
    {
      name: 'Ana',
      lastname: 'López',
      phone: '735-140-66-36',
      phoneCode: '+1',
      city: 'Guadalajara',
      cp: '44100',
      col: 'Americana',
      address: 'Av. Vallarta 456',
    },
  ];

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
      this.router.navigate(['/cart/confirm']);
    }, 2000);
  }

  onSelectSavedAddress(value: number | string | null) {
    const index = typeof value === 'string' ? parseInt(value, 10) : value;
    if (index === null || isNaN(index) || index === -1) return;

    const selected = this.savedAddresses[index];
    this.myFormData.patchValue({
      name: selected.name,
      lastname: selected.lastname,
      phone: selected.phone,
      phoneCode: selected.phoneCode,
      city: selected.city,
      cp: selected.cp,
      col: selected.col,
      address: selected.address,
    });
  }
}

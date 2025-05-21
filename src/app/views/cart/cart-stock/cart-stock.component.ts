import { UploadFilesService } from './../../../shared/services/store/upload-files.service';
import { ModalUploadServiceService } from './../../../shared/services/store/modal-upload-service.service';
import { AuthService } from './../../../shared/services/auth/auth.service';
import { AuthComponent } from './../../../layouts/auth/auth.component';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import File3DModel from '../../../interfaces/File3DModel';
import { from, Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart-stock',
  templateUrl: './cart-stock.component.html',
})
export class CartStockComponent{
  // private ModalUploadServiceService = Inject(ModalUploadServiceService);
  // private router = Inject(Router);
  // private uploadFilesService = Inject(UploadFilesService);
  // private AuthService = Inject(AuthService);



  loading = false;
  filesList$: Observable<File3DModel[]>;
  modalType$ = this.ModalUploadServiceService.getModalType();
  myFormData: FormGroup;

  constructor(private fb: FormBuilder,
    private ModalUploadServiceService: ModalUploadServiceService,
    private router: Router,
    private UploadFilesService: UploadFilesService,
    private AuthService: AuthService) {
    this.filesList$ = this.UploadFilesService.getFileUploadList();
    this.myFormData = this.fb.group({
      // tipo: [''],
      name: ['', Validators.required],
      // lastname: [''],
      // phone: [''],
      // city: [''],
      // cp: [''],
      // col: [''],
      // address: [''],
    });
  }



  crearCotizacion() {
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
        title: 'Metodo de pago no valido',
        text: 'Llena la informacion de tu tarjeta',
        icon: 'question',
      });
      return
    }


    if (!this.AuthService.isAuthenticated()) {
      setTimeout(() => {
        this.router.navigate(['/auth/login']);
      }, 2000);
      return;
    }

    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/cart/confirm']);
    }, 2000);
  }
}

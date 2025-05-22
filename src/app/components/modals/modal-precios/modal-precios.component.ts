import { ModalUploadServiceService } from './../../../feature/ecommerce/store/modal-upload-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-precios',
  templateUrl: './modal-precios.component.html',
})
export class ModalPreciosComponent {

  constructor(private ModalUploadServiceService: ModalUploadServiceService) {

  }

  closeModal(){
    this.ModalUploadServiceService.closeModal()
  }
}

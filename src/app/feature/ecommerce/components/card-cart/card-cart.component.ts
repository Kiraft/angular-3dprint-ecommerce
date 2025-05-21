import { ModalUploadServiceService } from '../../store/modal-upload-service.service';
import { Component, Input } from '@angular/core';
import File3DModel from '../../interfaces/File3DModel';
import { UploadFilesService } from '../../store/upload-files.service';

@Component({
  selector: 'app-card-cart',
  templateUrl: './card-cart.component.html',
})
export class CardCartComponent {
  @Input() item!: File3DModel;
  @Input() id!: number;

  constructor(private uploadFilesService: UploadFilesService, private ModalUploadServiceService: ModalUploadServiceService) {}

  addCounter(i: number): void {
    this.uploadFilesService.incrementQuantity(i);
  }

  resCounter(i: number): void {
    this.uploadFilesService.decrementQuantity(i);
  }

  eliminarItem(i: number) {
    this.uploadFilesService.removeFile(i);
  }


  showModalColor(id: number) {
    this.ModalUploadServiceService.openModal('color', id);
  }

  showModalMaterial(id: number) {
    this.ModalUploadServiceService.openModal('material', id);
  }

  showModalRelleno(id: number) {
    this.ModalUploadServiceService.openModal('relleno', id);
  }
}

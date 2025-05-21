import { ModalUploadServiceService } from './../../../shared/services/store/modal-upload-service.service';
import { UploadFilesService } from './../../../shared/services/store/upload-files.service';
import { Component, Input } from '@angular/core';
import File3DModel from '../../../interfaces/File3DModel';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table-upload',
  templateUrl: './table-upload.component.html',
})
export class TableUploadComponent {
  @Input() fileModelsTranfer!: File3DModel[];
  modalType$ = this.modalUploadServiceService.getModalType();

  constructor(
    private uploadFilesService: UploadFilesService,
    private modalUploadServiceService: ModalUploadServiceService
  ) {}

  addCounter(i: number): void {
    this.uploadFilesService.incrementQuantity(i);
  }

  resCounter(i: number): void {
    this.uploadFilesService.decrementQuantity(i);
  }

  deleteItemTable(i: number) {
    this.uploadFilesService.removeFile(i);
  }

  showModalColor(id: number) {
    this.modalUploadServiceService.openModal('color', id);
  }

  showModalMaterial(id: number) {
    this.modalUploadServiceService.openModal('material', id);
  }

  showModalRelleno(id: number) {
    this.modalUploadServiceService.openModal('relleno', id);
  }
}

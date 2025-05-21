import { Component, Input } from '@angular/core';
import Relleno3DModel from '../../interfaces/Relleno3DModel';
import { UploadFilesService } from '../../store/upload-files.service';
import { ModalUploadServiceService } from '../../store/modal-upload-service.service';

@Component({
  selector: 'app-button-rellenos',
  templateUrl: './button-rellenos.component.html',
  styleUrl: './button-rellenos.component.css'
})
export class ButtonRellenosComponent {
  constructor(private uploadFilesService: UploadFilesService, private ModalUploadServiceService: ModalUploadServiceService) {

  }

  @Input() rellenos!: Relleno3DModel;


  updateColor() {
    this.uploadFilesService.setRelleno(this.ModalUploadServiceService.getIdValue(), this.rellenos);
    this.ModalUploadServiceService.closeModal()
  }
}

import { Component, Input } from '@angular/core';
import Material3DModel from '../../interfaces/Material3DModel';
import { UploadFilesService } from '../../store/upload-files.service';
import { ModalUploadServiceService } from '../../store/modal-upload-service.service';

@Component({
  selector: 'app-buttons-material',
  templateUrl: './buttons-material.component.html',
  styleUrl: './buttons-material.component.css'
})
export class ButtonsMaterialComponent {
  constructor(private uploadFilesService: UploadFilesService, private ModalUploadServiceService: ModalUploadServiceService) {

  }

  @Input() material!: Material3DModel;


  updateColor() {
    this.uploadFilesService.setMaterial(this.ModalUploadServiceService.getIdValue(), this.material);
    this.ModalUploadServiceService.closeModal()
  }
}

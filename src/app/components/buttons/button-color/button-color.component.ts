import { ModalUploadServiceService } from './../../../shared/services/store/modal-upload-service.service';
import { UploadFilesService } from './../../../shared/services/store/upload-files.service';
import { Component, Input } from '@angular/core';
import Color3DModel from '../../../interfaces/Color3DModel';

@Component({
  selector: 'app-button-color',
  templateUrl: './button-color.component.html',
  styleUrl: './button-color.component.css'
})
export class ButtonColorComponent {

  constructor(private uploadFilesService: UploadFilesService, private ModalUploadServiceService: ModalUploadServiceService) {

  }

  @Input() color!: Color3DModel;


  updateColor() {
    this.uploadFilesService.setColor(this.ModalUploadServiceService.getIdValue(), this.color);
    this.ModalUploadServiceService.closeModal()
  }

}

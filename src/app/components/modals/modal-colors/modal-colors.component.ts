import { ModalUploadServiceService } from './../../../shared/services/store/modal-upload-service.service';
import { Observable } from 'rxjs';
import Color3DModel from '../../../interfaces/Color3DModel';
import { ColorsServicesService } from './../../../shared/services/colors-services.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-colors',
  templateUrl: './modal-colors.component.html',
})
export class ModalColorsComponent {

  colors!: Observable<Color3DModel[]>;
  
  constructor(private colorsServicesService: ColorsServicesService,
    private modalUploadServiceService: ModalUploadServiceService){
    this.colors = this.colorsServicesService.getColors();
  }


  closeModal() {
    this.modalUploadServiceService.closeModal()
  }

}

import { MaterialService } from './../../../shared/services/material.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import Material3DModel from '../../../interfaces/Material3DModel';
import { ModalUploadServiceService } from '../../../shared/services/store/modal-upload-service.service';

@Component({
  selector: 'app-modal-materials',
  templateUrl: './modal-materials.component.html',
  styleUrl: './modal-materials.component.css'
})
export class ModalMaterialsComponent {
  materials!: Observable<Material3DModel[]>;

  constructor(private MaterialService: MaterialService,
    private modalUploadServiceService: ModalUploadServiceService){
    this.materials = this.MaterialService.getMaterials();
  }


  closeModal() {
    this.modalUploadServiceService.closeModal()
  }

}

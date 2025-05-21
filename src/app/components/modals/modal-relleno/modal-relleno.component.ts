import { RellenoserviceService } from '../../../feature/ecommerce/services/rellenoservice.service';
import { Component } from '@angular/core';
import Relleno3DModel from '../../../feature/ecommerce/interfaces/Relleno3DModel';
import { Observable } from 'rxjs';
import { ModalUploadServiceService } from '../../../feature/ecommerce/store/modal-upload-service.service';

@Component({
  selector: 'app-modal-relleno',
  templateUrl: './modal-relleno.component.html',
  styleUrl: './modal-relleno.component.css'
})
export class ModalRellenoComponent {
  rellenos!: Observable<Relleno3DModel[]>;

  constructor(private RellenoserviceService: RellenoserviceService,
    private modalUploadServiceService: ModalUploadServiceService){
    this.rellenos = this.RellenoserviceService.getRelleno();
  }


  closeModal() {
    this.modalUploadServiceService.closeModal()
  }
}

import { UploadFilesService } from './../../../shared/services/store/upload-files.service';
import { Component, Input } from '@angular/core';
import File3DModel from '../../../interfaces/File3DModel';

@Component({
  selector: 'app-table-upload',
  templateUrl: './table-upload.component.html',
})
export class TableUploadComponent {

  @Input() fileModelsTranfer!: File3DModel[];

  constructor(private uploadFilesService: UploadFilesService) {

  }

  addCounter(i: number): void{
    this.uploadFilesService.incrementQuantity(i)
  }

  resCounter(i: number): void {
    this.uploadFilesService.decrementQuantity(i)
  }





}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-upload',
  templateUrl: './table-upload.component.html',
})
export class TableUploadComponent {
  @Input() fileTransfer!: File;
  counter = 1;

  @Input() fileModelsTranfer!: File[];

  addCounter() {

  }


}

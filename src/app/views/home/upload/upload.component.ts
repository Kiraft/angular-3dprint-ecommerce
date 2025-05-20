import { UploadFilesService } from '../../../shared/services/store/upload-files.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import File3DModel from '../../../interfaces/File3DModel';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
})
export class UploadComponent {
  @ViewChild('inputFileElement') inputFileElement!: ElementRef;
  filesList$: Observable<File3DModel[]>;

  constructor(private uploadFilesService: UploadFilesService) {
    this.filesList$ = this.uploadFilesService.getFileUploadList();
  }

  selectFile(): void {
    this.inputFileElement.nativeElement.value = null;
    this.inputFileElement.nativeElement.click();
  }

  onSelectFile(event: any) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      const fileData: File3DModel = {
        type: file.type,
        name: file.name,
        size: file.size,
        file: file,
        quantity: 1,
      };

      console.log('Archivo cargado:', event);
      this.uploadFilesService.setFileUploadPush(fileData);
    }
  }
}

import { UploadFilesService } from '../../../store/upload-files.service';
import { HttpClient } from '@angular/common/http';
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

  constructor(
    private uploadFilesService: UploadFilesService,
    private HttpClient: HttpClient,
    private UploadFilesService : UploadFilesService
  ) {
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
        color: {name: "BLANCO", colorCode: "#ffffff"},
        material: {name: "ABS"},
        quantity: 1,
        relleno: 20
      };

      console.log('Archivo cargado:', event);
      this.uploadFilesService.setFileUploadPush(fileData);
    }
  }

  cargarArchivoTest(): void {
      this.HttpClient.get('assets/localmodels/encaixe_do_filamento.STL', { responseType: 'blob' })
        .subscribe(blob => {
          // Crear un objeto tipo File
          const file = new File([blob], 'test.stl', { type: 'application/sla' });

          const fileData: File3DModel = {
            type: file.type,
            name: file.name,
            size: file.size,
            file: file,
            color: { name: "BLANCO", colorCode: "#ffffff" },
            material: { name: "ABS" },
            quantity: 1,
            relleno: 20
          };

          console.log('Archivo STL cargado desde assets:', fileData);

          this.UploadFilesService.setFileUploadPush(fileData);
        });
    }
}

import { UploadFilesService } from '../../../shared/services/store/upload-files.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

interface FileModel  {
  type: string,
  name: string,
  size: number
  file: File
}

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
})
export class UploadComponent implements OnInit {
  @ViewChild('inputFileElement') inputFileElement!: ElementRef;
  files: FileModel[] = [];

  constructor(private uploadFilesService: UploadFilesService){
    
  }

  ngOnInit(): void {

  }

  selectFile(): void {
    this.inputFileElement.nativeElement.value = null;
    this.inputFileElement.nativeElement.click();
  }

  onSelectFile(event: any) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      const fileData: FileModel ={
        type: file.type,
        name: file.name,
        size: file.size,
        file: file
      };

      console.log('Archivo cargado:', event);
      this.files.push(fileData)
    }
  }
}

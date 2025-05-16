import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html'
})
export class UploadComponent {

  @ViewChild('inputFileElement') inputFileElement!: ElementRef

  // Lista de archivos subido
  fileUploadList: any[] =  [

  ]

  selectFile() : void {
    this.inputFileElement.nativeElement.value = null;
    this.inputFileElement.nativeElement.click();
  }

  onSelectFile(event: any) {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    const file = input.files[0];

    this.fileUploadList.push({
      type: file.type,
      name: file.name,
      size: file.size,
    });

    console.log('Archivo cargado:', file);

  }

}
}

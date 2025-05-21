import { UploadFilesService } from '../../store/upload-files.service';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import File3DModel from '../../interfaces/File3DModel';

@Component({
  selector: 'app-cards-product',
  templateUrl: './cards-product.component.html'
})
export class CardsProductComponent {
  @Input() img!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() fileModelUrl!: string;

  constructor(private http: HttpClient, private UploadFilesService: UploadFilesService) {}

  cargarArchivoLocal(): void {
    this.http.get(this.fileModelUrl, { responseType: 'blob' })
      .subscribe(blob => {
        // Crear un objeto tipo File
        const file = new File([blob], `${this.title }.stl `, { type: 'application/sla' });

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

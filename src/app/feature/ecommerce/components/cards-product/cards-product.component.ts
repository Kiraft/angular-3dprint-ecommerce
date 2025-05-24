import { UploadFilesService } from '../../store/upload-files.service';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import File3DModel from '../../interfaces/File3DModel';
import Swal from 'sweetalert2';
import { UrlFileModel } from '../../interfaces/Product3DModel';

@Component({
  selector: 'app-cards-product',
  templateUrl: './cards-product.component.html',
})
export class CardsProductComponent {
  @Input() img!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() fileModelUrl!: UrlFileModel[];

  constructor(
    private http: HttpClient,
    private UploadFilesService: UploadFilesService
  ) {}

  cargarArchivoLocal(): void {
    this.fileModelUrl.forEach((url) => {
      this.http.get(url.url, { responseType: 'blob' }).subscribe((blob) => {
        // Crear un objeto tipo File
        const file = new File([blob], `${url.name}.stl `, {
          type: 'application/sla',
        });

        const fileData: File3DModel = {
          type: file.type,
          name: file.name,
          size: file.size,
          file: file,
          color: { name: 'BLANCO', colorCode: '#ffffff' },
          material: { name: 'ABS' },
          quantity: 1,
          relleno: 20,
          isTest: false
        };

        console.log('Archivo STL cargado desde assets:', fileData);

        this.UploadFilesService.setFileUploadPush(fileData);
        Swal.fire({
          title: 'Modelo agregado!',
          icon: 'success',
          draggable: true,
        });
      });
    });
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import File3DModel from '../../../interfaces/File3DModel';
import { Observable } from 'rxjs';
import { UploadFilesService } from '../../../shared/services/store/upload-files.service';

@Component({
  selector: 'app-cart-stock',
  templateUrl: './cart-stock.component.html'
})
export class CartStockComponent {
  loading = false;
  filesList$: Observable<File3DModel[]>;

  constructor(private router: Router, private uploadFilesService: UploadFilesService) {
    this.filesList$ = this.uploadFilesService.getFileUploadList();
  }

  crearCotizacion() {
    this.loading = true;

    // Simula el tiempo de creación (puede ser una llamada real a un servicio HTTP)
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/cart/confirm']);
    }, 2000);
  }
}

import { AuthService } from './../../../shared/services/auth/auth.service';
import { AuthComponent } from './../../../layouts/auth/auth.component';
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

  constructor(
    private router: Router,
    private uploadFilesService: UploadFilesService,
    private AuthService: AuthService) {
    this.filesList$ = this.uploadFilesService.getFileUploadList();
  }

  crearCotizacion() {
    if (!this.AuthService.isAuthenticated()) {
      setTimeout(() => {
        this.router.navigate(['/auth/login']);
      }, 2000);
      return;
    }

    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/cart/confirm']);
    }, 2000);

  }
}

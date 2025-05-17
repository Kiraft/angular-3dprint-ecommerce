import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-stock',
  templateUrl: './cart-stock.component.html'
})
export class CartStockComponent {
  loading = false;

  constructor(private router: Router) {}

  crearCotizacion() {
    this.loading = true;

    // Simula el tiempo de creación (puede ser una llamada real a un servicio HTTP)
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/cart/confirm']);
    }, 2000);
  }
}

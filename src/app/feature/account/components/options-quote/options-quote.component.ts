import { CheckoutService } from './../../services/checkout.service';
import { Router, ActivatedRoute } from '@angular/router';
import { QuotesService } from './../../services/quotes.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import Swal from 'sweetalert2';
import Quotes from '../../interfaces/Quotes';
import { Title } from 'chart.js';

@Component({
  selector: 'app-options-quote',
  templateUrl: './options-quote.component.html',
  styleUrl: './options-quote.component.css',
})
export class OptionsQuoteComponent {
  @Output() show = new EventEmitter<boolean>();

  @Input() quote!: Quotes;

  constructor(
    private QuotesService: QuotesService,
    private route: Router,
    private ActivatedRoute: ActivatedRoute,
    private CheckoutService: CheckoutService
  ) {}

  rejectQuote() {
    Swal.fire({
      title: 'Seguro que quieres rechazar esta cotizacion?',
      showDenyButton: true,
      showCancelButton: true,
      // confirmButtonText: 'Save',
      showConfirmButton: false,
      denyButtonText: `Rechazar ahora!`,
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
      } else if (result.isDenied) {
        Swal.fire('Rechazada', '', 'success');

        this.QuotesService.updateQuoteStatusCode(
          this.ActivatedRoute.snapshot.params['id'],
          'Rechazado'
        );
        this.route.navigate(['/account/quotes']);
      }
    });
  }

  enviarAlPadre() {
    this.show.emit(true);
  }

  acceptQuote() {
    const id = this.ActivatedRoute.snapshot.params['id'];
    this.enviarAlPadre();

    const paymentData = this.quote.products.map((item) => {
      return {
        title: item.name,
        price: item.unit_price,
        quantity: item.quantity,
      };
    });

    const paymentFinish = [
      ...paymentData,
      { title: 'Envio', price: this.quote.shippingPrice, quantity: 1 },
    ];

    // Mapeo de códigos de descuento
    const discountCodes: { [key: number]: string } = {
      0.05: 'Mc9k3tKm',
      0.08: '8317STSG',
      0.1: 'HaMdhPrT',
      0.15: 'J30O6SMh',
    };

    // Obtener el código de descuento o un valor por defecto
    const discount = discountCodes[this.quote.discount] || 'DES_NOT';

    this.CheckoutService.onProceedToPay(id, paymentFinish, discount);
  }
}

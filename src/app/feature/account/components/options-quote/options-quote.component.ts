import { CheckoutService } from './../../services/checkout.service';
import { Router, ActivatedRoute } from '@angular/router';
import { QuotesService } from './../../services/quotes.service';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-options-quote',
  templateUrl: './options-quote.component.html',
  styleUrl: './options-quote.component.css',
})
export class OptionsQuoteComponent {
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
      cancelButtonText: "Cancelar"
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

  acceptQuote() {
    const id = this.ActivatedRoute.snapshot.params['id'];
    this.CheckoutService.onProceedToPay(id)
  }
}

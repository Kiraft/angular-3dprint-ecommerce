import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { map } from 'rxjs';
import { loadStripe } from '@stripe/stripe-js';
import { QuotesService } from './quotes.service';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private readonly _serverURL = environment.backurl;

  constructor(private http: HttpClient, private QuotesService: QuotesService) {}

  onProceedToPay(id: any, items: any, descuento: string): any {

      this.QuotesService.updateQuoteStatusCode(id, 'Aceptado');


    return this.http
      .post(`${this._serverURL}/checkout`, {
        items: items,
        descuento: descuento
      })
      .pipe(
        map(async (res: any) => {
          const stripe = await loadStripe(environment.STRAPE_KEY);
          stripe?.redirectToCheckout({ sessionId: res.id });
        })
      )
      .subscribe({
        error: (err) => console.error('Error', err),
      });
  }
}

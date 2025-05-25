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

  onProceedToPay(id: any): any {
    setTimeout(() => {
      this.QuotesService.updateQuoteStatusCode(id, 'Aceptado');
    }, 10000);

    return this.http
      .post(`${this._serverURL}/checkout`, {
        items: [
          {
            title: 'Cabeza 3D',
            price: 200,
            quantity: 3,
          },
          {
            title: 'Mano 3D',
            price: 10,
            quantity: 20,
          },
        ],
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

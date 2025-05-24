import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import Material3DModel from '../../ecommerce/interfaces/Material3DModel';
import Quotes from '../interfaces/Quotes';

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  constructor() {}

  private dataQuotes : Quotes[] = [
      {
        id: '#FWB146284623',
        date: new Date(2024, 7, 28, 15, 30),
        address: {
          name: 'Juan',
          lastname: 'Pérez',
          phone: '555-123-45-67',
          phoneCode: '+52',
          city: 'Ciudad de México',
          cp: '03100',
          col: 'Roma Sur',
          address: 'Calle Falsa #123',
        },
        price: 180,
        status: 'Cancelado',
        paymentMethod: 'Visa',
        products: [],
        discount: 0,
        shippingPrice: 200,
        shippingType: 'Estandar',
        statusQuote: 'Aceptado',
      },
      {
        id: '#FWB125467980',
        date: new Date(2024, 8, 15, 15, 30),
        address: {
          name: 'Juan',
          lastname: 'Pérez',
          phone: '555-123-45-67',
          phoneCode: '+52',
          city: 'Ciudad de México',
          cp: '03100',
          col: 'Roma Sur',
          address: 'Calle Falsa #123',
        },
        price: 85,
        status: 'Entregado',
        paymentMethod: 'Visa',
        products: [],
        discount: 0,
        shippingPrice: 200,
        shippingType: 'Estandar',
        statusQuote: 'Aceptado',
      },
      {
        id: '#FWB139485607',
        date: new Date(2025, 1, 2, 15, 30),
        address: {
          name: 'Ana',
          lastname: 'López',
          phone: '735-140-66-36',
          phoneCode: '+1',
          city: 'Guadalajara',
          cp: '44100',
          col: 'Americana',
          address: 'Av. Vallarta 456',
        },
        price: 499,
        status: 'Enviado',
        paymentMethod: 'Visa',
        products: [],
        discount: 0,
        shippingPrice: 200,
        shippingType: 'Estandar',
        statusQuote: 'Aceptado',
      },

      {
        id: '#FWB139485699',
        date: new Date(2025, 4, 24, 15, 30),
        address: {
          name: 'Ana',
          lastname: 'López',
          phone: '735-140-66-36',
          phoneCode: '+1',
          city: 'Guadalajara',
          cp: '44100',
          col: 'Americana',
          address: 'Av. Vallarta 456',
        },
        price: 499,
        status: 'Fabricando',
        paymentMethod: 'Visa',
        products: [],
        discount: 0,
        shippingPrice: 200,
        shippingType: 'Estandar',
        statusQuote: 'Pendiente',
      },
    ]

  getQuotes(): Observable<Quotes[]> {
    return of(this.dataQuotes).pipe(
      delay(200),
      map((quotes) =>
        quotes
          .filter((q) => q.statusQuote === 'Aceptado')
          .sort((a, b) => b.date.getTime() - a.date.getTime())
      )
    );
  }

  getQuoteById(id: string): Observable<Quotes | undefined> {
    return of(this.dataQuotes).pipe(
      delay(200),
      map((quotes) => quotes.find((q) => q.id === id))
    );
  }
}

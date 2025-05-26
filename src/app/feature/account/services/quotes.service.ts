import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import Material3DModel from '../../ecommerce/interfaces/Material3DModel';
import Quotes from '../interfaces/Quotes';

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  private dataQuotes: Quotes[] = [];

  constructor() {
    this.loadFromLocalStorage();
  }

  // Guarda en localStorage
  private saveToLocalStorage(): void {
    localStorage.setItem('quotes', JSON.stringify(this.dataQuotes));
  }

  // Carga desde localStorage o datos por defecto
  private loadFromLocalStorage(): void {
    const stored = localStorage.getItem('quotes');
    if (stored) {
      this.dataQuotes = JSON.parse(stored, (key, value) => {
        if (key === 'date') return new Date(value); // Reconstruye fechas
        return value;
      });
    } else {
      // Datos iniciales por defecto
      this.dataQuotes = [
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
          price: 599,
          status: 'Cancelado',
          paymentMethod: 'Visa',
          products: [
            {
              name: 'KonfliktGames_HKT_Castle',
              fileURL:
                'assets/localmodels/3dQuotes/q1/KonfliktGames_HKT_Castle.stl',
              dimensions: { x: 38, y: 50, z: 30 },
              quantity: 5,
              color: 'ROJO',
              material: 'PLA',
              relleno: 20,
            },

            {
              name: 'SimpleBiplane_KonfliktGames',
              fileURL:
                'assets/localmodels/3dQuotes/q1/SimpleBiplane_KonfliktGames.stl',
              dimensions: { x: 38, y: 50, z: 30 },
              quantity: 5,
              color: 'BLANCO',
              material: 'PLA',
              relleno: 100,
            },
          ],
          discount: 0,
          shippingPrice: 79,
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
          price: 14999,
          status: 'Entregado',
          paymentMethod: 'Visa',
          products: [
            {
              name: '_Front_Left_Wide',
              fileURL: 'assets/localmodels/3dQuotes/q1/_Front_Left_Wide.stl',
              dimensions: { x: 38, y: 50, z: 30 },
              quantity: 50,
              color: 'ROJO',
              material: 'PLA',
              relleno: 50,
            },

            {
              name: '_Front_Right_Wide',
              fileURL: 'assets/localmodels/3dQuotes/q1/_Front_Right_Wide.stl',
              dimensions: { x: 38, y: 50, z: 30 },
              quantity: 50,
              color: 'BLANCO',
              material: 'PLA',
              relleno: 100,
            },
            {
              name: '_Rear_Left_Wide',
              fileURL: 'assets/localmodels/3dQuotes/q1/_Rear_Left_Wide.stl',
              dimensions: { x: 38, y: 50, z: 30 },
              quantity: 50,
              color: 'AMARILLO',
              material: 'ABS',
              relleno: 100,
            },
            {
              name: '_Rear_Right_Wide',
              fileURL: 'assets/localmodels/3dQuotes/q1/_Rear_Right_Wide.stl',
              dimensions: { x: 38, y: 50, z: 30 },
              quantity: 50,
              color: 'AMARILLO',
              material: 'ABS',
              relleno: 100,
            },
          ],
          discount: 15,
          shippingPrice: 1000,
          shippingType: 'Express',
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
          price: 8999,
          status: 'Enviado',
          paymentMethod: 'Visa',
          products: [
            {
              name: 'Boar',
              fileURL: 'assets/localmodels/3dQuotes/q1/Boar.stl',
              dimensions: { x: 38, y: 50, z: 30 },
              quantity: 300,
              color: 'ROJO',
              material: 'PLA',
              relleno: 20,
            },
          ],
          discount: 15,
          shippingPrice: 0,
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
          price: 1999,
          status: 'Fabricando',
          paymentMethod: 'Visa',
          products: [
            {
              name: 'jinshi',
              fileURL: 'assets/localmodels/3dQuotes/q1/jinshi.stl',
              dimensions: { x: 38, y: 50, z: 30 },
              quantity: 30,
              color: 'ROJO',
              material: 'PLA',
              relleno: 20,
            },

            {
              name: 'lego',
              fileURL: 'assets/localmodels/3dQuotes/q1/lego.stl',
              dimensions: { x: 38, y: 50, z: 30 },
              quantity: 10,
              color: 'BLANCO',
              material: 'PLA',
              relleno: 100,
            },
            {
              name: 'skull',
              fileURL: 'assets/localmodels/3dQuotes/q1/skull.stl',
              dimensions: { x: 38, y: 50, z: 30 },
              quantity: 20,
              color: 'AMARILLO',
              material: 'ABS',
              relleno: 100,
            },
          ],
          discount: 5,
          shippingPrice: 200,
          shippingType: 'Estandar',
          statusQuote: 'Pendiente',
        },
        {
          id: '#FWB139485633',
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
          price: 1999,
          status: 'Fabricando',
          paymentMethod: 'Visa',
          products: [
            {
              name: 'jinshi',
              fileURL: 'assets/localmodels/3dQuotes/q1/jinshi.stl',
              dimensions: { x: 38, y: 50, z: 30 },
              quantity: 30,
              color: 'ROJO',
              material: 'PLA',
              relleno: 20,
            },

            {
              name: 'lego',
              fileURL: 'assets/localmodels/3dQuotes/q1/lego.stl',
              dimensions: { x: 38, y: 50, z: 30 },
              quantity: 10,
              color: 'BLANCO',
              material: 'PLA',
              relleno: 100,
            },
            {
              name: 'skull',
              fileURL: 'assets/localmodels/3dQuotes/q1/skull.stl',
              dimensions: { x: 38, y: 50, z: 30 },
              quantity: 20,
              color: 'AMARILLO',
              material: 'ABS',
              relleno: 100,
            },
          ],
          discount: 5,
          shippingPrice: 200,
          shippingType: 'Estandar',
          statusQuote: 'Pendiente',
        },
      ];
      this.saveToLocalStorage();
    }
  }

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
      map((quotes) => {
        const quote = quotes.find((q) => q.id === id);
        return quote &&
          (quote.statusQuote === 'Pendiente' ||
            quote.statusQuote === 'Aceptado')
          ? quote
          : undefined;
      })
    );
  }

  updateQuoteStatusCode(
    id: string,
    newStatus: 'Aceptado' | 'Rechazado'
  ): boolean {
    const quote = this.dataQuotes.find((q) => q.id === id);
    if (quote) {
      quote.statusQuote = newStatus;
      this.saveToLocalStorage();
      return true;
    }
    return false;
  }
}

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
          price: 520,
          status: 'Cancelado',
          paymentMethod: 'Visa',
          products: [
            {
              name: 'KonfliktGames_HKT_Castle',
              fileURL:
                'https://res.cloudinary.com/dcfcfu5o0/raw/upload/v1748256049/KonfliktGames_HKT_Castle_ojspye.stl',
              dimensions: { x: 38, y: 50, z: 30 },
              quantity: 10,
              color: 'ROJO',
              material: 'PLA',
              relleno: 20,
              unit_price: 40,
            },

            {
              name: 'SimpleBiplane_KonfliktGames',
              fileURL:
                'https://res.cloudinary.com/dcfcfu5o0/raw/upload/v1748256050/SimpleBiplane_KonfliktGames_tc0hde.stl',
              dimensions: { x: 38, y: 50, z: 30 },
              quantity: 4,
              color: 'BLANCO',
              material: 'PLA',
              relleno: 100,
              unit_price: 30,
            },
          ],
          discount: 0.0,
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
          price: 12000,
          status: 'Entregado',
          paymentMethod: 'Visa',
          products: [
            {
              name: '_Front_Left_Wide',
              fileURL:
                'https://res.cloudinary.com/dcfcfu5o0/raw/upload/v1748255227/_Front_Left_Wide_ch6vat.stl',
              dimensions: { x: 38, y: 50, z: 30 },
              quantity: 50,
              color: 'ROJO',
              material: 'PLA',
              relleno: 50,
              unit_price: 50,
            },

            {
              name: '_Front_Right_Wide',
              fileURL:
                'https://res.cloudinary.com/dcfcfu5o0/raw/upload/v1748255420/_Front_Right_Wide_t1uiku.stl',
              dimensions: { x: 38, y: 50, z: 30 },
              quantity: 50,
              color: 'BLANCO',
              material: 'PLA',
              relleno: 100,
              unit_price: 60,
            },
            {
              name: '_Rear_Left_Wide',
              fileURL:
                'https://res.cloudinary.com/dcfcfu5o0/raw/upload/v1748255418/_Rear_Left_Wide_ctgx5l.stl',
              dimensions: { x: 38, y: 50, z: 30 },
              quantity: 50,
              color: 'AMARILLO',
              material: 'ABS',
              relleno: 100,
              unit_price: 65,
            },
            {
              name: '_Rear_Right_Wide',
              fileURL:
                'https://res.cloudinary.com/dcfcfu5o0/raw/upload/v1748255418/_Rear_Right_Wide_ka0uns.stl',
              dimensions: { x: 38, y: 50, z: 30 },
              quantity: 50,
              color: 'AMARILLO',
              material: 'ABS',
              relleno: 100,
              unit_price: 65,
            },
          ],
          discount: 0.15,
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
          price: 10347,
          status: 'Enviado',
          paymentMethod: 'Visa',
          products: [
            {
              name: 'Boar',
              fileURL:
                'https://res.cloudinary.com/dcfcfu5o0/raw/upload/v1748255889/Boar_o1m2zm.stl',
              dimensions: { x: 38, y: 50, z: 30 },
              quantity: 300,
              color: 'ROJO',
              material: 'PLA',
              relleno: 20,
              unit_price: 34.49,
            },
          ],
          discount: 0.15,
          shippingPrice: 0,
          shippingType: 'Estandar',
          statusQuote: 'Aceptado',
        },
        // Para testear
        {
          id: '#FWB139485699',
          date: new Date(2025, 5, 26, 15, 30),

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
          price: 1200,
          status: 'Fabricando',
          paymentMethod: 'Visa',
          products: [
            {
              name: 'Clipper',
              fileURL: 'https://res.cloudinary.com/dcfcfu5o0/raw/upload/v1748341802/Clipper_Sleeve_-_Horse_crvomf.stl',
              dimensions: { x: 38, y: 50, z: 30 },
              quantity: 30,
              color: 'ROJO',
              material: 'PLA',
              relleno: 20,
              unit_price: 35.0,
            },

            {
              name: 'Leelo Heart',
              fileURL:
                'https://res.cloudinary.com/dcfcfu5o0/raw/upload/v1748342177/Sizzling_Leelo_fk9tbd.stl',
              dimensions: { x: 38, y: 50, z: 30 },
              quantity: 20,
              color: 'BLANCO',
              material: 'PLA',
              relleno: 100,
              unit_price: 25.0,
            },

          ],
          discount: 0.05,
          shippingPrice: 200,
          shippingType: 'Estandar',
          statusQuote: 'Pendiente',
        },

        {
          id: '#FWB139485633',
          date: new Date(2025, 5, 27, 15, 30),

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
          price: 1893.6,
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
              unit_price: 35.0,
            },

            {
              name: 'lego',
              fileURL:
                'https://res.cloudinary.com/dcfcfu5o0/raw/upload/v1748255647/lego_ehd49j.STL',
              dimensions: { x: 38, y: 50, z: 30 },
              quantity: 10,
              color: 'BLANCO',
              material: 'PLA',
              relleno: 100,
              unit_price: 25.0,
            },
            {
              name: 'Kupplung Shield',
              fileURL:
                'https://res.cloudinary.com/dcfcfu5o0/raw/upload/v1748256677/Escudo_llavero_velez.stl_fu45kv.stl',
              dimensions: { x: 38, y: 50, z: 30 },
              quantity: 20,
              color: 'AMARILLO',
              material: 'ABS',
              relleno: 100,
              unit_price: 29.68,
            },
          ],
          discount: 0.05,
          shippingPrice: 200,
          shippingType: 'Estandar',
          statusQuote: 'Pendiente',
        },

        {
          id: '#FWB126467988',
          date: new Date(2025, 5, 27, 15, 30),
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
          price: 215,
          status: 'Fabricando',
          paymentMethod: 'Visa',
          products: [
            {
              name: 'Logo Mitsubichi',
              fileURL:
                'https://res.cloudinary.com/dcfcfu5o0/raw/upload/v1748265666/Mitsubishi_Logo_Keychain_job2r3.stl',
              dimensions: { x: 38, y: 50, z: 30 },
              quantity: 4,
              color: 'ROJO',
              material: 'PLA',
              relleno: 20,
              unit_price: 35.0,
            },

            {
              name: 'Logo Mercedes',
              fileURL:
                'https://res.cloudinary.com/dcfcfu5o0/raw/upload/v1748265676/Mercedes_Benz_Logo_Keychain_u7qqxz.stl',
              dimensions: { x: 38, y: 50, z: 30 },
              quantity: 3,
              color: 'BLANCO',
              material: 'PLA',
              relleno: 100,
              unit_price: 25.0,
            },
          ],
          discount: 0,
          shippingPrice: 75,
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

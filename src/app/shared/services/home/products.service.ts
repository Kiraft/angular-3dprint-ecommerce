import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

interface Color {
  name: string;
  colorCode: string;
}

interface ProductsStock {
  img: string;
  description: string;
  price: number;
  title: string;
  colors: Color[];
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  getProducts(): Observable<ProductsStock[]> {
    const dataProducts: ProductsStock[] = [
      {
        img: 'assets/img/products/product2.jpg',
        description: 'Llavero de muy buena forma que mida aproximadamente',
        price: 200.0,
        title: 'LLavero de Cocodrilo',
        colors: [
          {
            name: 'Rojo',
            colorCode: '#CC0C0C',
          },
          {
            name: 'Azul',
            colorCode: '#66C2EA',
          },
        ],
      },
            {
        img: 'assets/img/products/product3.jpg',
        description: 'Llavero de muy buena forma que mida aproximadamente',
        price: 200.0,
        title: 'LLavero de Cocodrilo',
        colors: [
          {
            name: 'Rojo',
            colorCode: '#CC0C0C',
          },
          {
            name: 'Azul',
            colorCode: '#66C2EA',
          },
          {
            name: 'Verde',
            colorCode: '#41CC70',
          },
        ],
      },
            {
        img: 'assets/img/products/product4.jpg',
        description: 'Llavero de muy buena forma que mida aproximadamente',
        price: 200.0,
        title: 'LLavero de Cocodrilo',
        colors: [
          {
            name: 'Verde',
            colorCode: '#41CC70',
          },
        ],
      },
    ];

    return of(dataProducts).pipe(delay(1500));
  }
}

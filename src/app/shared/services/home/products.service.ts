import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import Color3DModel from '../../../interfaces/Color3DModel';
import Products3DModel from '../../../interfaces/Product3DModel';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  getProducts(): Observable<Products3DModel[]> {
    const dataProducts: Products3DModel[] = [
      {
        img: 'assets/img/products/product2.jpg',
        description: 'Llavero de muy buena forma que mida aproximadamente',
        title: 'LLavero de Cocodrilo',
        name: "LLavero de Cocodrilo"
      },
      {
        img: 'assets/img/products/product3.jpg',
        description: 'Llavero minimalista de forma circular',
        title: 'LLavero codorniz',
        name: 'LLavero codorniz'
      },
      {
        img: 'assets/img/products/product4.jpg',
        description: 'Llavero de forma trigular con estetica moderna',
        title: 'LLavero de Triangulo',
        name: 'LLavero de Triangulo',
      },
    ];

    return of(dataProducts).pipe(delay(200));
  }
}

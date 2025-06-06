import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import Color3DModel from '../interfaces/Color3DModel';
import Products3DModel from '../interfaces/Product3DModel';

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
        name: 'LLavero de Cocodrilo',
        urlFile: [{
          name:'Square_Croco' ,
          url: 'assets/localmodels/SquareAnimals/Square_Croco.stl'
        }],
      },
      {
        img: 'assets/img/productfinal.jpg',
        description:
          'Cascaras especializada para proteger un RasberryPi de forma de caricatura',
        title: 'Carcasa RasberryPi',
        name: 'Carcasa RasberryPi',
        urlFile: [
          {
            name: 'piplus-top',
            url: 'assets/localmodels/rasberri/piplus-top.stl',
          },
          {
            name: 'piplus-bottom',
            url: 'assets/localmodels/rasberri/piplus-bottom.stl',
          },
          {
            name: 'piplus-teeth',
            url: 'assets/localmodels/rasberri/piplus-teeth.stl',
          },
        ],
      },
      {
        img: 'assets/img/products/product4.jpg',
        description: 'Llavero de forma trigular con estetica moderna',
        title: 'LLavero de Triangulo',
        name: 'LLavero de Triangulo',
        urlFile: [
          {
            name: 'llavero harry potter triangulo',
            url: 'assets/localmodels/amg3D/llavero harry potter triangulo.stl'
          }
          ,
        ],
      },
    ];

    return of(dataProducts).pipe(delay(200));
  }
}

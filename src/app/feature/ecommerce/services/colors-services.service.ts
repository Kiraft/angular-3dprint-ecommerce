import { Injectable } from '@angular/core';
import Color3DModel from '../interfaces/Color3DModel';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorsServicesService {

  constructor() {}

    getColors(): Observable<Color3DModel[]> {
      const dataColors: Color3DModel[] = [
        {
          name: "BLANCO",
          colorCode: "#ffffff"
        },
                {
          name: "ROJO",
          colorCode: "#cc0a0a"
        },
                {
          name: "VERDE",
          colorCode: "##17871e"
        },
                {
          name: "AMARILLO",
          colorCode: "#d9c516"
        },
                {
          name: "ROSA",
          colorCode: "#eb78ff"
        },

      ];

      return of(dataColors).pipe(delay(200));
    }
}

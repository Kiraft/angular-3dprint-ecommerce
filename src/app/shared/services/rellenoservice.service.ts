import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import Relleno3DModel from '../../interfaces/Relleno3DModel';

@Injectable({
  providedIn: 'root'
})
export class RellenoserviceService {

  constructor() { }

    getRelleno(): Observable<Relleno3DModel[]> {
    const dataRelleno: Relleno3DModel[] = [
      {
        porcentaje: 20,
        imgUrl: 'assets/img/relleno/20.webp',
      },
      {
        porcentaje: 60,
        imgUrl: 'assets/img/relleno/60.webp',
      },
      {
        porcentaje: 100,
        imgUrl: 'assets/img/relleno/100.webp',
      },
    ];

    return of(dataRelleno).pipe(delay(200));
  }
}

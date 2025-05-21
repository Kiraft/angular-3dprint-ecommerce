import { Injectable } from '@angular/core';
import Material3DModel from '../interfaces/Material3DModel';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

       getMaterials(): Observable<Material3DModel[]> {
          const dataColors: Material3DModel[] = [
            {
              name: "PLA",
              imgUrl: "assets/img/materials/front-calculadora-pla.webp",
              description: "Bioplástico ecológico, ideal para prototipos y piezas no mecánicas."
            },
                    {
              name: "ABS",
              imgUrl: "assets/img/materials/front-calculadora-abs.webp",
              description: "Plástico resistente y flexible, adecuado para piezas duraderas y funcionales."
            },
                    {
              name: "PETG",
              imgUrl: "assets/img/materials/front-calculadora-petg.webp",
              description: "Plástico resistente y flexible, adecuado para piezas duraderas y funcionales."
            }
          ];

          return of(dataColors).pipe(delay(200));
        }

}

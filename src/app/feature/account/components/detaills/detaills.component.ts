import { QuotesService } from './../../services/quotes.service';
import { Component, Output } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import Quotes from '../../interfaces/Quotes';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detaills',
  templateUrl: './detaills.component.html',
  styleUrl: './detaills.component.css',
})
export class DetaillsComponent {
  quote$: Observable<Quotes | undefined>;
  show: boolean = false;

  constructor(
    routerActive: ActivatedRoute,
    private QuotesService: QuotesService
  ) {

    console.log('Lo que tiene la ruta');

    console.log(routerActive.snapshot.params['id']);

    const idFromRoute = routerActive.snapshot.params['id'];
    const formattedId = idFromRoute.startsWith('#')
      ? idFromRoute
      : `#${idFromRoute}`;

    this.quote$ = this.QuotesService.getQuoteById(formattedId);

    console.log('Lo que se le pasa al servicio');
    console.log(formattedId);


  }

  recibirShow(evento: boolean) {
    this.show = evento;
  }
}

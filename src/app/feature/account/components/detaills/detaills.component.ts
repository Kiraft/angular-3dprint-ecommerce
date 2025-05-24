import { QuotesService } from './../../services/quotes.service';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import Quotes from '../../interfaces/Quotes';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detaills',
  templateUrl: './detaills.component.html',
  styleUrl: './detaills.component.css'
})
export class DetaillsComponent {

  quote$: Observable<Quotes | undefined>;

  constructor(routerActive: ActivatedRoute, private QuotesService: QuotesService) {
     const idFromRoute = routerActive.snapshot.params['id'];
  const formattedId = idFromRoute.startsWith('#') ? idFromRoute : `#${idFromRoute}`;

  this.quote$ = this.QuotesService.getQuoteById(formattedId);

  }
}

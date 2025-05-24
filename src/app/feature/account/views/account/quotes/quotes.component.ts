import { QuotesService } from './../../../services/quotes.service';
  import { Observable } from 'rxjs';
  import { ModalCodeQuoteService } from './../../../services/modal-code-quote.service';
  import { Component } from '@angular/core';
import Quotes from '../../../interfaces/Quotes';

  @Component({
    selector: 'app-quotes',
    templateUrl: './quotes.component.html'
  })
  export class QuotesComponent {

    modalState$ : Observable<boolean>;

    quotesList$: Observable<Quotes[]>

    constructor (private ModalCodeQuoteService: ModalCodeQuoteService, private QuotesService: QuotesService) {
      this.quotesList$ = QuotesService.getQuotes();
      this.modalState$ = ModalCodeQuoteService.getModalState();
    }

    openModalCode() {
      this.ModalCodeQuoteService.openModal();
    }

  }

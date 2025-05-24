  import { Observable } from 'rxjs';
  import { ModalCodeQuoteService } from './../../../services/modal-code-quote.service';
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-quotes',
    templateUrl: './quotes.component.html'
  })
  export class QuotesComponent {

    modalState$ : Observable<boolean>;

    constructor (private ModalCodeQuoteService: ModalCodeQuoteService) {
      this.modalState$ = ModalCodeQuoteService.getModalState();
    }

    openModalCode() {
      this.ModalCodeQuoteService.openModal();
    }

  }

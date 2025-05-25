import { QuotesService } from './../../services/quotes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalCodeQuoteService } from './../../services/modal-code-quote.service';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-code-quote',
  templateUrl: './modal-code-quote.component.html',
  styleUrl: './modal-code-quote.component.css',
})
export class ModalCodeQuoteComponent {
  codeQuoteCodeForm!: FormGroup;

  constructor(
    private ModalCodeQuoteService: ModalCodeQuoteService,
    private fb: FormBuilder,
    private router: Router,
    private QuotesService: QuotesService
  ) {
    // #FWB139485699 esta estructura debe tener el codigo
    this.codeQuoteCodeForm = this.fb.group({
      code: ['', [Validators.required, Validators.pattern(/^#FWB\d{9}$/)]],
    });
  }

  submit() {
    if (this.codeQuoteCodeForm.valid) {
      const code = this.codeQuoteCodeForm.get('code')?.value;

      this.QuotesService.getQuoteById(code).subscribe((quote) => {
        if (quote) {
          this.ModalCodeQuoteService.setCodeQuote(code);
          this.ModalCodeQuoteService.closeModal();

          this.router.navigate(['/account/quotes', code, 'details']);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Cotización inválida',
            text: 'La cotización no existe o ya fue procesada.',
          });
        }
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Número de cotización inválido',
      });
    }
  }

  closeModal() {
    this.ModalCodeQuoteService.closeModal();
  }
}

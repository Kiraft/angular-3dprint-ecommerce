import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalCodeQuoteService } from './../../services/modal-code-quote.service';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

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
    private router: Router
  ) {
    this.codeQuoteCodeForm = this.fb.group({
      code: ['', [Validators.required]],
    });
  }

  submit() {
    if (this.codeQuoteCodeForm.valid) {
      const code = this.codeQuoteCodeForm.get('code')?.value;
      this.ModalCodeQuoteService.setCodeQuote(code);
      this.ModalCodeQuoteService.closeModal();
        this.router.navigate(['/account/quotes/details']);
    }
  }

  closeModal() {
    this.ModalCodeQuoteService.closeModal();
  }
}

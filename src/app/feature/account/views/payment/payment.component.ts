import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
})
export class PaymentComponent {
  selectedMethod: string = '';

  selectMethod(method: string) {
    this.selectedMethod = method;
  }
}

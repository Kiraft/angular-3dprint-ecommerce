import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-product',
  templateUrl: './cards-product.component.html'
})
export class CardsProductComponent {
  @Input() img!: string;
  @Input() title!: string;
  @Input() description!: string;


}

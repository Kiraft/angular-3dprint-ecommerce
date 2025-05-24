import { Component, Input } from '@angular/core';
import Quotes from '../../interfaces/Quotes';

@Component({
  selector: 'app-card-quote',
  templateUrl: './card-quote.component.html',
  styleUrl: './card-quote.component.css'
})
export class CardQuoteComponent {
  @Input() quote!: Quotes;
}

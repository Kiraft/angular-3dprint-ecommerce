import { Component, Input } from '@angular/core';
import Quotes from '../../interfaces/Quotes';

@Component({
  selector: 'app-tracking-quote',
  templateUrl: './tracking-quote.component.html',
  styleUrl: './tracking-quote.component.css'
})
export class TrackingQuoteComponent {

  @Input() quote!: Quotes;

}

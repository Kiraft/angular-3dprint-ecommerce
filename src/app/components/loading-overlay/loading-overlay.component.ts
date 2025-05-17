import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-overlay',
  templateUrl: './loading-overlay.component.html'
})
export class LoadingOverlayComponent {
   @Input() show = false;
}

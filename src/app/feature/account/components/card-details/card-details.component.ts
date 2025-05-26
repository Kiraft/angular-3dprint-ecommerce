import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import File3DQuote from '../../../ecommerce/interfaces/File3DQuote';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.css',
})
export class CardDetailsComponent implements OnChanges {
  @Input() item!: File3DQuote;
  public loadedFile?: File;

  constructor(private http: HttpClient) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['item'] && this.item?.fileURL) {
      this.cargarArchivoLocal();
    }
  }

  cargarArchivoLocal(): void {
    console.log('URL del archivo:', this.item.fileURL);
    this.http
      .get(this.item.fileURL, { responseType: 'blob' })
      .subscribe((blob) => {
        const file = new File([blob], `${this.item.name}.stl`, {
          type: 'application/sla',
        });
        this.loadedFile = file;
        console.log('Archivo STL cargado desde assets:', file);
      });
  }
}

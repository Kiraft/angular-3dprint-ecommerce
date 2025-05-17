import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../shared/services/home/products.service';
import { Observable } from 'rxjs';

interface Color {
  name: string;
  colorCode: string;
}

interface ProductsStock {
  img: string;
  description: string;
  price: number;
  title: string;
  colors: Color[];
}

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
})
export class StockComponent implements OnInit {
  products$!: Observable<ProductsStock[]>;

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }
}

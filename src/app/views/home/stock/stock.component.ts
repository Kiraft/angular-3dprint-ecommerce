import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../shared/services/home/products.service';
import { Observable } from 'rxjs';
import Color3DModel from '../../../interfaces/Color3DModel';
import Products3DModel from '../../../interfaces/Product3DModel';



@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
})
export class StockComponent implements OnInit {
  products$!: Observable<Products3DModel[]>;

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }
}

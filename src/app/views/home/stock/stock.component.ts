import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../shared/services/home/products.service';
import { map, Observable } from 'rxjs';
import Color3DModel from '../../../interfaces/Color3DModel';
import Products3DModel from '../../../interfaces/Product3DModel';



@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
})
export class StockComponent implements OnInit {
  products$!: Observable<Products3DModel[]>;
  filteredProducts$!: Observable<Products3DModel[]>;
  searchTerm: string = '';

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
    this.filteredProducts$ = this.products$; // inicialmente muestra todos
  }

  onSearch(): void {
    this.filteredProducts$ = this.products$.pipe(
      map(products =>
        products.filter(product =>
          product.name?.toLowerCase().includes(this.searchTerm.toLowerCase())
        )
      )
    );
  }
}

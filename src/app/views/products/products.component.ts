import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'fox-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products: Product[];
  public displayedColumns: string[] = ['name', 'status', 'details'];

  constructor(private productsService: ProductsService) {
    this.products = [];
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    /* Camino normal para consultar al backend */
    this.productsService.getProducts().subscribe(resp => {
      this.products = resp;
    });
    /* Realizamos un fake login para la prueba */
    this.products = this.productsService.getFakeProducts();
  }

  productDetails(product: Product) {
    
  }
}

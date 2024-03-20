import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ProductsService } from '../services/products.service';
import { ProductModel } from '../services/products';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit {
  displayedColumns: string[] = ["id", "name", "price", "rating"];
  products: ProductModel[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getAll().subscribe(res => this.products = res.products);
  }
}

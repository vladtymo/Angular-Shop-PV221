import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface ProductModel {
  id: number;
  name: string;
  categoryId: number;
  discount: number;
  price: number;
}

export interface ProductResponseModel {
  products: ProductModel[];
  limit: number;
  skip: number;
  total: number;
}

const ELEMENT_DATA: ProductModel[] = [
  { id: 1, name: 'Samsung G50', price: 340.5, discount: 10, categoryId: 1 },
  { id: 2, name: 'Xiaomi G50', price: 340.5, discount: 15, categoryId: 1 },
  { id: 3, name: 'Blackberry Curve 8900', price: 70.3, discount: 0, categoryId: 1 }
];

const api = "https://dummyjson.com/products";

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit {
  displayedColumns: string[] = ["id", "name", "price", "rating"];
  products: ProductModel[] = ELEMENT_DATA;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<ProductResponseModel>(api).subscribe(res => {
      console.log(res.products);

      this.products = res.products;
    });
  }


}

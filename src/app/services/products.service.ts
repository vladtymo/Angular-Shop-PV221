import { Injectable } from '@angular/core';
import { ProductModel, ProductResponseModel } from './products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const api = "https://dummyjson.com/products";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ProductResponseModel> {
    return this.http.get<ProductResponseModel>(api);
  }

  create(item: ProductModel): void {
    //this.http.post<ProductModel>(api, item);
    console.log("Creating product:", item);
  }

  delete(id: number): void {
    // TODO: refactor api path
    //this.http.delete(api + "products/delete" + id);
    console.log("Deleting product id: " + id);
  }
}

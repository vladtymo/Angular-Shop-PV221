import { Injectable } from '@angular/core';
import { CategoryModel, CreateProductModel, ProductModel } from './products';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const api = "https://localhost:7206/api/products/"; //"https://dummyjson.com/products";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(api);
  }

  getCategories(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(api + "categories");
  }

  get(id: number): Observable<ProductModel> {
    return this.http.get<ProductModel>(api + id);
  }

  edit(model: ProductModel): Observable<any> {
    return this.http.put<ProductModel>(api, model); // [FromBody]
  }

  create(item: CreateProductModel): Observable<any> {
    console.log("Creating product:", item);

    const formData = new FormData();

    for (const key in item) {
      formData.append(key, item[key as keyof CreateProductModel] as string | Blob);
    }

    const headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });
    return this.http.post(api, formData, { headers: headers }); // [FromForm]
  }

  delete(id: number): Observable<any> {
    console.log("Deleting product id: " + id);
    return this.http.delete(api + id);
  }
}

import { Routes } from '@angular/router';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "products", component: ProductsListComponent },
    { path: "add", component: AddProductComponent }
];

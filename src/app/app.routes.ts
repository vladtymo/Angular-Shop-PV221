import { Routes } from '@angular/router';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { adminGuard } from './account/admin.guard';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "products", component: ProductsListComponent },
    { path: "add", component: AddProductComponent },
    { path: "edit/:id", component: EditProductComponent, canActivate: [adminGuard] },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent }
];

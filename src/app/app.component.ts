import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ProductsListComponent } from "./products/products-list/products-list.component";
import { AddProductComponent } from "./products/add-product/add-product.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ProductsListComponent, AddProductComponent]
})
export class AppComponent {
  title = 'shop_pv221';
}

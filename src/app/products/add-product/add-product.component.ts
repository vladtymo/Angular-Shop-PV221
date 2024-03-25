import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { ProductModel } from '../../services/products';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  form = this.fb.group({
    name: [''],
    price: [0],
    discount: [0],
    description: [''],
    categoryId: [0],
    inStock: [false]
  });

  constructor(private fb: FormBuilder,
    private service: ProductsService,
    private location: Location) { }

  onSubmit(): void {
    if (!this.form.valid) return;

    const item = this.form.value as ProductModel;
    this.service.create(item);
  }

  back(): void {
    this.location.back();
  }
}

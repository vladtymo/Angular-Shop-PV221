import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { CreateProductModel, ProductModel } from '../../services/products';
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
    inStock: [false],
    image: [null, Validators.required]
  });

  constructor(private fb: FormBuilder,
    private service: ProductsService,
    private location: Location) { }

  onSubmit(): void {
    if (!this.form.valid) return;

    const item = this.form.value as CreateProductModel;
    this.service.create(item).subscribe(res => {
      console.log(res);
    });
  }

  back(): void {
    this.location.back();
  }

  onFileSelected(event: any) {
    //const target = (event.target as HTMLInputElement);
    const file = event.target.files[0]; // Here we use only the first file (single file)
    this.form.patchValue({ image: file });
  }
}

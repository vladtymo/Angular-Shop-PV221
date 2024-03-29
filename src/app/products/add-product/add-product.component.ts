import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { CategoryModel, CreateProductModel, ProductModel } from '../../services/products';
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
export class AddProductComponent implements OnInit {

  form: FormGroup;
  categories: CategoryModel[] = [];

  constructor(private fb: FormBuilder,
    private service: ProductsService,
    private location: Location) {

    this.form = this.fb.group({
      name: [''],
      price: [0],
      discount: [0],
      description: [''],
      categoryId: [0],
      inStock: [false],
      image: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.service.getCategories().subscribe(res => this.categories = res);
  }

  onSubmit(): void {
    if (!this.form.valid) return;

    const item = this.form.value as CreateProductModel;
    this.service.create(item).subscribe(res => {
      console.log(res);
      this.back();
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

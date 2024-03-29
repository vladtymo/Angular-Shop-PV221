import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { CategoryModel, ProductModel } from '../../services/products';
import { MatIconModule } from '@angular/material/icon';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
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
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit {

  form: FormGroup;
  id: number = 0;
  product: ProductModel | null = null;
  categories: CategoryModel[] = [];

  constructor(private fb: FormBuilder,
    private service: ProductsService,
    private location: Location,
    private route: ActivatedRoute) {

    this.form = this.fb.group({
      id: [0, Validators.required],
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      discount: [0, [Validators.required, Validators.min(0)]],
      description: ['', Validators.minLength(10)],
      categoryId: [0, [Validators.required, Validators.min(1)]],
      inStock: [false],
      imageUrl: ['', Validators.required],
      categoryName: ['']
    });
  }

  ngOnInit(): void {

    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.service.getCategories().subscribe(res => this.categories = res);

    this.service.get(this.id).subscribe(res => {
      console.log(res);

      this.product = res;
      this.form.setValue(res);
    });
  }

  onSubmit(): void {
    if (!this.form.valid) return;

    const item = this.form.value as ProductModel;
    this.service.edit(item).subscribe();
  }

  back(): void {
    this.location.back();
  }

  onCancel() {
    if (this.product)
      this.form.setValue(this.product);
  }
}

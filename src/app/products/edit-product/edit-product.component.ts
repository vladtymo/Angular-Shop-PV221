import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { ProductModel } from '../../services/products';
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
  form = this.fb.group({
    name: [''],
    price: [0],
    discount: [0],
    description: [''],
    categoryId: [0],
    inStock: [false]
  });
  id: number = 0;

  constructor(private fb: FormBuilder,
    private service: ProductsService,
    private location: Location,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = +(this.route.snapshot.paramMap.get('id') ?? 0);

    this.service.get(this.id).subscribe(res => {
      console.log(res);

      this.form.setValue({
        name: res.title,
        price: res.price,
        discount: res.discountPercentage,
        categoryId: 0,
        description: res.description,
        inStock: false
      });
    });
  }

  onSubmit(): void {
    if (!this.form.valid) return;

    const item = this.form.value as ProductModel;
    this.service.create(item);
  }

  back(): void {
    this.location.back();
  }
}

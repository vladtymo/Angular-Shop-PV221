import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ProductsService } from '../../services/products.service';
import { ProductModel } from '../../services/products';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationDialogComponent } from '../delete-confirmation-dialog/delete-confirmation-dialog.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit {
  displayedColumns: string[] = ["id", "name", "price", "rating", "actions"];
  products: ProductModel[] = [];

  constructor(private productsService: ProductsService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.productsService.getAll().subscribe(res => this.products = res.products);
  }

  onDelete(id: number): void {
    // open confirmation dialog
    this.openConfirmDialog().afterClosed().subscribe(res => {
      if (res === true)
        this.productsService.delete(id);
    });
  }

  openConfirmDialog() {
    return this.dialog.open(DeleteConfirmationDialogComponent);
  }
}

import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ProductsService } from '../../services/products.service';
import { ProductModel } from '../../services/products';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationDialogComponent } from '../delete-confirmation-dialog/delete-confirmation-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit {
  displayedColumns: string[] = ["image", "id", "name", "price", "rating", "actions"];
  products: ProductModel[] = [];
  tableSource = new MatTableDataSource<ProductModel>([]);

  constructor(private productsService: ProductsService,
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
    this.productsService.getAll().subscribe(res => {
      this.products = res;
      this.refreshTable();
    });
  }

  onDelete(id: number): void {
    // open confirmation dialog
    this.openConfirmDialog().afterClosed().subscribe(res => {
      if (res === true)
        this.productsService.delete(id).subscribe(res => {

          const index = this.products.findIndex(x => x.id === id);

          console.log(index);
          this.products.splice(index, 1);
          console.log(this.products);
          this.refreshTable();
        });
    });
  }

  onEdit(id: number): void {
    // open edit page
    this.router.navigate(["/edit", id]);
  }

  openConfirmDialog() {
    return this.dialog.open(DeleteConfirmationDialogComponent);
  }

  refreshTable() {
    this.tableSource.data = this.products;
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ListMultiTableProductsComponent } from './list-multi-table-products.component';

@NgModule({
  imports: [CommonModule, MatTableModule],
  declarations: [ListMultiTableProductsComponent],
  providers: [],
  exports: [ListMultiTableProductsComponent]
})
export class ListMultiTableProductsComponentModule {
}

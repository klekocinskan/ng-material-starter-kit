import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { ListMultiListProductsComponent } from './list-multi-list-products.component';

@NgModule({
  imports: [MatListModule, CommonModule],
  declarations: [ListMultiListProductsComponent],
  providers: [],
  exports: [ListMultiListProductsComponent]
})
export class ListMultiListProductsComponentModule {
}

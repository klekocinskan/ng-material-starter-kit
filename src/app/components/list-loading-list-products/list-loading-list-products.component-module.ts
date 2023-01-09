import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ListLoadingListProductsComponent } from './list-loading-list-products.component';

@NgModule({
  imports: [MatListModule, CommonModule, MatProgressSpinnerModule],
  declarations: [ListLoadingListProductsComponent],
  providers: [],
  exports: [ListLoadingListProductsComponent]
})
export class ListLoadingListProductsComponentModule {
}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListSingleListNamesComponent } from './components/list-single-list-names/list-single-list-names.component';
import { ListLoadingListProductsComponent } from './components/list-loading-list-products/list-loading-list-products.component';
import { ListMultiListProductsComponent } from './components/list-multi-list-products/list-multi-list-products.component';
import { ListSingleListNamesComponentModule } from './components/list-single-list-names/list-single-list-names.component-module';
import { ListLoadingListProductsComponentModule } from './components/list-loading-list-products/list-loading-list-products.component-module';
import { ListMultiListProductsComponentModule } from './components/list-multi-list-products/list-multi-list-products.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'list-1-single-list-names', component: ListSingleListNamesComponent },
                                  { path: 'products', component: ListLoadingListProductsComponent },
                                  { path: 'list-1-multi-list-products', component: ListMultiListProductsComponent }]), 
                                  ListSingleListNamesComponentModule, 
                                  ListLoadingListProductsComponentModule,
                                   ListMultiListProductsComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

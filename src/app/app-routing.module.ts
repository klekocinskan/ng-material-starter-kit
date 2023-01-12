import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListSingleListNamesComponent } from './components/list-single-list-names/list-single-list-names.component';
import { ListLoadingListProductsComponent } from './components/list-loading-list-products/list-loading-list-products.component';
import { ListMultiListProductsComponent } from './components/list-multi-list-products/list-multi-list-products.component';
import { ListNestedListAndChipsInfluencersComponent } from './components/list-nested-list-and-chips-influencers/list-nested-list-and-chips-influencers.component';
import { ListSingleChipsCryptoComponent } from './components/list-single-chips-crypto/list-single-chips-crypto.component';
import { ListSingleCheckboxCategoriesComponent } from './components/list-single-checkbox-categories/list-single-checkbox-categories.component';
import { ListSingleMenuCategoriesComponent } from './components/list-single-menu-categories/list-single-menu-categories.component';
import { ListMultiTableProductsComponent } from './components/list-multi-table-products/list-multi-table-products.component';
import { ListMultiTableCryptoComponent } from './components/list-multi-table-crypto/list-multi-table-crypto.component';
import { ListMultiTableJobpostComponent } from './components/list-multi-table-jobpost/list-multi-table-jobpost.component';
import { FormControlNameComponent } from './components/form-control-name/form-control-name.component';
import { ListSingleListNamesComponentModule } from './components/list-single-list-names/list-single-list-names.component-module';
import { ListLoadingListProductsComponentModule } from './components/list-loading-list-products/list-loading-list-products.component-module';
import { ListMultiListProductsComponentModule } from './components/list-multi-list-products/list-multi-list-products.component-module';
import { ListNestedListAndChipsInfluencersComponentModule } from './components/list-nested-list-and-chips-influencers/list-nested-list-and-chips-influencers.component-module';
import { ListSingleChipsCryptoComponentModule } from './components/list-single-chips-crypto/list-single-chips-crypto.component-module';
import { ListSingleCheckboxCategoriesComponentModule } from './components/list-single-checkbox-categories/list-single-checkbox-categories.component-module';
import { ListSingleMenuCategoriesComponentModule } from './components/list-single-menu-categories/list-single-menu-categories.component-module';
import { ListMultiTableProductsComponentModule } from './components/list-multi-table-products/list-multi-table-products.component-module';
import { ListMultiTableCryptoComponentModule } from './components/list-multi-table-crypto/list-multi-table-crypto.component-module';
import { ListMultiTableJobpostComponentModule } from './components/list-multi-table-jobpost/list-multi-table-jobpost.component-module';
import { FormControlNameComponentModule } from './components/form-control-name/form-control-name.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'list-1-single-list-names', component: ListSingleListNamesComponent }, { path: 'products', component: ListLoadingListProductsComponent }, { path: 'list-1-multi-list-products', component: ListMultiListProductsComponent }, { path: 'list-1-nested-list-influencers', component: ListNestedListAndChipsInfluencersComponent }, { path: 'crypto', component: ListSingleChipsCryptoComponent }, { path: 'checkbox-categories', component: ListSingleCheckboxCategoriesComponent }, { path: 'categories-menu', component: ListSingleMenuCategoriesComponent }, { path: 'product-search', component: ListMultiTableProductsComponent }, { path: 'crypto-table', component: ListMultiTableCryptoComponent }, { path: 'job-post-table', component: ListMultiTableJobpostComponent }, { path: 'form-1-control-name', component: FormControlNameComponent }]), ListSingleListNamesComponentModule, ListLoadingListProductsComponentModule, ListMultiListProductsComponentModule, ListNestedListAndChipsInfluencersComponentModule, ListSingleChipsCryptoComponentModule, ListSingleCheckboxCategoriesComponentModule, ListSingleMenuCategoriesComponentModule, ListMultiTableProductsComponentModule, ListMultiTableCryptoComponentModule, ListMultiTableJobpostComponentModule, FormControlNameComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

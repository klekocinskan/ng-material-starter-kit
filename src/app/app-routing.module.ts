import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListSingleListNamesComponent } from './components/list-single-list-names/list-single-list-names.component';
import { ListSingleListNamesComponentModule } from './components/list-single-list-names/list-single-list-names.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'list-1-single-list-names', component: ListSingleListNamesComponent }]), ListSingleListNamesComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

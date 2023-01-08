import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { ListSingleListNamesComponent } from './list-single-list-names.component';

@NgModule({
  imports: [MatListModule, CommonModule],
  declarations: [ListSingleListNamesComponent],
  providers: [],
  exports: [ListSingleListNamesComponent]
})
export class ListSingleListNamesComponentModule {
}

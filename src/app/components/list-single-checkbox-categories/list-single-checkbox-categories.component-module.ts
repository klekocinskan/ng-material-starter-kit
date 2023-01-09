import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ListSingleCheckboxCategoriesComponent } from './list-single-checkbox-categories.component';

@NgModule({
  imports: [MatCheckboxModule, CommonModule],
  declarations: [ListSingleCheckboxCategoriesComponent],
  providers: [],
  exports: [ListSingleCheckboxCategoriesComponent]
})
export class ListSingleCheckboxCategoriesComponentModule {
}

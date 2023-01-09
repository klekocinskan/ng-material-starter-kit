import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ListSingleCheckboxCategoriesComponent } from './list-single-checkbox-categories.component';

@NgModule({
  imports: [MatCheckboxModule, CommonModule, MatTableModule, MatProgressSpinnerModule],
  declarations: [ListSingleCheckboxCategoriesComponent],
  providers: [],
  exports: [ListSingleCheckboxCategoriesComponent]
})
export class ListSingleCheckboxCategoriesComponentModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ListSingleMenuCategoriesComponent } from './list-single-menu-categories.component';

@NgModule({
  imports: [MatButtonModule, MatMenuModule, CommonModule],
  declarations: [ListSingleMenuCategoriesComponent],
  providers: [],
  exports: [ListSingleMenuCategoriesComponent]
})
export class ListSingleMenuCategoriesComponentModule {
}

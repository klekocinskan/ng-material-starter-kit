import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { ListNestedListAndChipsInfluencersComponent } from './list-nested-list-and-chips-influencers.component';

@NgModule({
  imports: [MatListModule, CommonModule, MatChipsModule],
  declarations: [ListNestedListAndChipsInfluencersComponent],
  providers: [],
  exports: [ListNestedListAndChipsInfluencersComponent]
})
export class ListNestedListAndChipsInfluencersComponentModule {
}

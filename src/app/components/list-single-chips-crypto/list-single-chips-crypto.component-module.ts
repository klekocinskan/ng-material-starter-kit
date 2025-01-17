import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ListSingleChipsCryptoComponent } from './list-single-chips-crypto.component';

@NgModule({
  imports: [MatChipsModule, CommonModule, MatProgressSpinnerModule],
  declarations: [ListSingleChipsCryptoComponent],
  providers: [],
  exports: [ListSingleChipsCryptoComponent]
})
export class ListSingleChipsCryptoComponentModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ListMultiTableCryptoComponent } from './list-multi-table-crypto.component';

@NgModule({
  imports: [CommonModule, MatTableModule],
  declarations: [ListMultiTableCryptoComponent],
  providers: [],
  exports: [ListMultiTableCryptoComponent]
})
export class ListMultiTableCryptoComponentModule {
}

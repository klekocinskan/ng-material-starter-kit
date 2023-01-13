import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FormControlSelectUserRolesComponent } from './form-control-select-user-roles.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatSelectModule, MatOptionModule],
  declarations: [FormControlSelectUserRolesComponent],
  providers: [],
  exports: [FormControlSelectUserRolesComponent]
})
export class FormControlSelectUserRolesComponentModule {
}

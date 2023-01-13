import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControlAgeComponent } from './form-control-age.component';

@NgModule({
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, CommonModule],
  declarations: [FormControlAgeComponent],
  providers: [],
  exports: [FormControlAgeComponent]
})
export class FormControlAgeComponentModule {
}

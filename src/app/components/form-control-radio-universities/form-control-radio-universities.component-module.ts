import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { FormControlRadioUniversitiesComponent } from './form-control-radio-universities.component';

@NgModule({
  imports: [MatFormFieldModule, MatRadioModule, ReactiveFormsModule, CommonModule],
  declarations: [FormControlRadioUniversitiesComponent],
  providers: [],
  exports: [FormControlRadioUniversitiesComponent]
})
export class FormControlRadioUniversitiesComponentModule {
}

import { NgModule } from '@angular/core';
import { FormControlEmailComponent } from './form-control-email.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [MatFormFieldModule, MatInputModule, CommonModule, ReactiveFormsModule],
  declarations: [FormControlEmailComponent],
  providers: [],
  exports: [FormControlEmailComponent]
})
export class FormControlEmailComponentModule {
}

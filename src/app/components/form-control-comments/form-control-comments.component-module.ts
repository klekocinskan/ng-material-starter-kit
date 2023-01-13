import { NgModule } from '@angular/core';
import { FormControlCommentsComponent } from './form-control-comments.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  declarations: [FormControlCommentsComponent],
  providers: [],
  exports: [FormControlCommentsComponent]
})
export class FormControlCommentsComponentModule {
}

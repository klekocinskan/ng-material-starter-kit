import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control-name',
  styleUrls: ['./form-control-name.component.scss'],
  templateUrl: './form-control-name.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormControlNameComponent {
  readonly name = new FormControl('',[Validators.required, Validators.minLength(3)]);
  

  onNameSubmitted(): void {
  }

}


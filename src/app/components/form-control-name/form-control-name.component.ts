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
  readonly name: FormGroup = new FormGroup({ name: new FormControl('',[Validators.required, Validators.pattern('[a-z]{3,}')]) });

  onNameSubmitted(name: FormGroup): void {
  }

  
}


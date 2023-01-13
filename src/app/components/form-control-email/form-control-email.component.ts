import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control-email',
  styleUrls: ['./form-control-email.component.scss'],
  templateUrl: './form-control-email.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormControlEmailComponent {
  readonly email = new FormControl('',Validators.email)
}

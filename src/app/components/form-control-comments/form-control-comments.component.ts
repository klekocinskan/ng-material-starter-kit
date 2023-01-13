import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control-comments',
  styleUrls: ['./form-control-comments.component.scss'],
  templateUrl: './form-control-comments.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormControlCommentsComponent {
  readonly comment = new FormControl('', [Validators.pattern('^\\S*(?:\\S+\\s+){3}(\\S+\\s*){1,}\\s*$')]);
}

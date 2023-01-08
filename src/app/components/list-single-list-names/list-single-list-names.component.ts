import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-list-single-list-names',
  styleUrls: ['./list-single-list-names.component.scss'],
  templateUrl: './list-single-list-names.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListSingleListNamesComponent {

  readonly names$ = of(['Tom','Andrew','Chris','Peter']);
}

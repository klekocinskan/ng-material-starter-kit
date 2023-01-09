import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { InfluencersModel } from '../../models/influencers.model';
import { InfluencersService } from '../../services/influencers.service';

@Component({
  selector: 'app-list-nested-list-and-chips-influencers',
  styleUrls: ['./list-nested-list-and-chips-influencers.component.scss'],
  templateUrl: './list-nested-list-and-chips-influencers.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListNestedListAndChipsInfluencersComponent {
  readonly influencers$: Observable<InfluencersModel[]> = this._influencersService.getAll();

  constructor(private _influencersService: InfluencersService) {
  }
}

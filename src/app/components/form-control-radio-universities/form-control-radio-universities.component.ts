import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { UniversitiesModel } from '../../models/universities.model';
import { UniversitiesService } from '../../services/universities.service';

@Component({
  selector: 'app-form-control-radio-universities',
  styleUrls: ['./form-control-radio-universities.component.scss'],
  templateUrl: './form-control-radio-universities.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormControlRadioUniversitiesComponent {
  readonly polishUniversities$: Observable<UniversitiesModel[]> = this._universitiesService.getAll();
  readonly university = new FormControl();


  constructor(private _universitiesService: UniversitiesService) {
    
  }

   


}

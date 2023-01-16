import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { UserRoleService } from '../../services/user-role.service'

@Component({
  selector: 'app-form-group-radio-user-and-gender',
  styleUrls: ['./form-group-radio-user-and-gender.component.scss'],
  templateUrl: './form-group-radio-user-and-gender.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormGroupRadioUserAndGenderComponent {
  readonly gender$ = of(['male', 'female']);
  submitted = true;

  readonly createNewUserForm: FormGroup = new FormGroup({
    name: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    gender: new FormControl('',Validators.required)
  });

  constructor(private _userRoleService: UserRoleService){

  }
  onCreateNewUserFormSubmitted(createNewUserForm: FormGroup): void {
    this._userRoleService.createNewUserGender({
      name: createNewUserForm.get('name')?.value,
      lastName: createNewUserForm.get('lastName')?.value,
      gender: createNewUserForm.get('gender')?.value
    }).subscribe();
  }
}

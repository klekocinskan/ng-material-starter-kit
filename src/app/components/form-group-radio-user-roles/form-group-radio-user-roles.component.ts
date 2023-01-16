import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserRoleModel } from '../../models/user-role.model';
import { UserRoleService } from '../../services/user-role.service';

@Component({
  selector: 'app-form-group-radio-user-roles',
  styleUrls: ['./form-group-radio-user-roles.component.scss'],
  templateUrl: './form-group-radio-user-roles.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormGroupRadioUserRolesComponent {
  readonly roles$: Observable<UserRoleModel[]> = this._userRoleService.getAll();
  readonly createUserForm: FormGroup = new FormGroup({
    email: new FormControl(),
    role: new FormControl()
  });

  constructor(private _userRoleService: UserRoleService) {
  }

  onCreateUserFormSubmitted(createUserForm: FormGroup): void {
    this._userRoleService.createNewUser({
      email: createUserForm.get('email')?.value,
      roleId: createUserForm.get('role')?.value
    }).subscribe();
  }
}

import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserRoleModel } from '../../models/user-role.model';
import { UserRoleService } from '../../services/user-role.service';

@Component({
  selector: 'app-group-select-user-and-roles',
  styleUrls: ['./group-select-user-and-roles.component.scss'],
  templateUrl: './group-select-user-and-roles.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupSelectUserAndRolesComponent {
  readonly roles$: Observable<UserRoleModel[]> = this._userRoleService.getAll();
  readonly createUser: FormGroup = new FormGroup({
    email: new FormControl(),
    roleId: new FormControl()
  });

  constructor(private _userRoleService: UserRoleService) {
  }

  onCreateUserSubmitted(createUser: FormGroup): void {
    this._userRoleService.createNewUser({
      email: createUser.get('email')?.value,
      roleId: createUser.get('roleId')?.value
    }).subscribe();
  }
}

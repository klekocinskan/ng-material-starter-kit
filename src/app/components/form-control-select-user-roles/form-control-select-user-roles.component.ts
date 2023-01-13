import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserRoleModel } from '../../models/user-role.model';
import { UserRoleService } from '../../services/user-role.service';

@Component({
  selector: 'app-form-control-select-user-roles',
  styleUrls: ['./form-control-select-user-roles.component.scss'],
  templateUrl: './form-control-select-user-roles.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormControlSelectUserRolesComponent {
  readonly userRole = new FormControl('', Validators.required)
  readonly userRoles$: Observable<UserRoleModel[]> = this._userRoleService.getAll();

  constructor(private _userRoleService: UserRoleService) {
  }
}


import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-form-group-text-login',
  styleUrls: ['./form-group-text-login.component.scss'],
  templateUrl: './form-group-text-login.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormGroupTextLoginComponent {
  readonly loginForm: FormGroup = new FormGroup({ 
    username: new FormControl(),
    password: new FormControl() 
  });

  constructor(private _loginService: LoginService){
    
  }

  onLoginFormSubmitted(loginForm: FormGroup): void {
    this._loginService.logIn({
      username: loginForm.get('username')?.value,
      password: loginForm.get('password')?.value
    }).subscribe();
    
  }
}

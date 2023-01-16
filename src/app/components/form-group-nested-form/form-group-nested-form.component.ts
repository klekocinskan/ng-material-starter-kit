import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NestedUserService } from '../../services/nested-user.service'

@Component({
  selector: 'app-form-group-nested-form',
  styleUrls: ['./form-group-nested-form.component.scss'],
  templateUrl: './form-group-nested-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormGroupNestedFormComponent {
  readonly fullNameForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required)
  });
  readonly geolocationForm: FormGroup = new FormGroup({
    lat: new FormControl('', Validators.required),
    long: new FormControl('', Validators.required)
  });
  readonly adressForm: FormGroup = new FormGroup({
    city: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
    number: new FormControl('', Validators.required),
    zipcode: new FormControl('', Validators.required),
    geolocation: this.geolocationForm
  });
  readonly userForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    fullName: this.fullNameForm,
    addres: this.adressForm,
    phone: new FormControl('', Validators.required)
  });

  constructor(private userService: NestedUserService ){

  }

  onUserFormSubmitted(userForm: FormGroup): void {
    this.userService.createNewUser({
      email: userForm.get('email')?.value,
      username: userForm.get('username')?.value,
      password: userForm.get('password')?.value,
      phone: userForm.get('phone')?.value,
      fullName:{
        name: this.fullNameForm.get('name')?.value,
        lastName: this.fullNameForm.get('lastName')?.value,
      }, 
      addres:{
        city: this.adressForm.get('city')?.value,
        street: this.adressForm.get('street')?.value,
        number: this.adressForm.get('number')?.value,
        zipcode: this.adressForm.get('zipcode')?.value,
        geolocation: {
          lat: this.geolocationForm.get('lat')?.value,
          long: this.geolocationForm.get('long')?.value,
        }
      }
     
    }).subscribe();
  }
}

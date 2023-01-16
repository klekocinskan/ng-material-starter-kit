import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginReditentialsModel } from '../models/login-reditentials.model'
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(private _httpClient: HttpClient) {
  }

  logIn(creditentials: LoginReditentialsModel): Observable<void>{
    return this._httpClient.post<void>('https://fakestoreapi.com/auth/login', creditentials);
  }
}

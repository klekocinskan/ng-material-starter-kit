import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NestedUserModel } from '../models/nested-user.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NestedUserService {

  constructor(private _httpClient: HttpClient) {
  }

  createNewUser(user: NestedUserModel): Observable<void>{
    return this._httpClient.post<void>('https://fakestoreapi.com/users', user);
  }
}

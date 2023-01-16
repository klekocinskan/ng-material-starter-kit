import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRoleModel } from '../models/user-role.model';
import { UserModel } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserRoleService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<UserRoleModel[]> {
    return this._httpClient.get<UserRoleModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/roles');
  }

   
  createNewUser(user: UserModel): Observable<void>{
    return this._httpClient.post<void>('https://636ce2d8ab4814f2b2712854.mockapi.io/user',user);
  }
}

export interface UserModel {
  readonly roleId: string;
  readonly email: string;
  
}

export interface UserModelWithGender{
  readonly gender: string;
  readonly name: string;
  readonly lastName: string;
}

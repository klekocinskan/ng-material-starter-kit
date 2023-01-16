
export interface NestedUserModel {
    readonly email: string;
    readonly username: string;
    readonly password: string;
    readonly fullName: FullName;
    readonly addres: Address;
    readonly phone: string;

}

export interface Geolocation{
    readonly lat: number;
    readonly long: number;
}

export interface Address{
    readonly city: string;
    readonly street: string;
    readonly number: number;
    readonly zipcode: string;
    readonly geolocation: Geolocation;
}

export interface FullName{
    readonly name: string;
    readonly lastName: string;
}
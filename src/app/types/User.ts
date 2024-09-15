import { Address } from "./Address";

export class User {
    userEmail : string = '';
    userPassword: string = '';
    userFullName: string = '';
    confirmPassword: string = '';
    userMobile: string = '';
    userId: number = 0;
    firstName: string = '';
    lastName: string = '';
    alias: string = '';
    phoneNo: string = '';
    websiteUrl: string = '';
	faxNo: string = '';
	dateOfBirth: string = '';
	userRole: string = '';
    address: Address = new Address();
}
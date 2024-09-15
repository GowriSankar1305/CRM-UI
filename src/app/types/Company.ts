import { Address } from "./Address";

export class Company    {
    companyId: number = 0;
	companyName: string = '';
	companyAlias: string = '';
	noOfEmployees: number = 0;
	phoneNo: string = '';
	mobileNo: string = '';
	fax: string = '';
	websiteUrl: string = '';
	description: string = '';
	address: Address = new Address();
	ownerId: number = 0;
}
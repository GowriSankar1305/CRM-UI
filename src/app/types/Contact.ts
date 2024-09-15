import { Address } from "./Address";

export class Contact    {
    contactId: number = 0;
    ownerId: number = 0;
	salutation: string = '';
	firstName : string = '';
	lastName : string = '';
	leadSource : string = '';
	accountId : number = 0;
	email: string = '';
	phone: string = '';
	mobile: string = '';
	dateOfBirth: string = '';
	title: string = '';
	department: string = '';
	fax: string = '';
	description: string = '';
	createdBy: number = 0;
	modifiedBy: number = 0;
	mailingAddress: Address = new Address();
	otherAddress: Address = new Address();
}
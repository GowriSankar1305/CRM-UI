import { Address } from "./Address";

export class Vendor {
    vendorId: number = 0;
	ownerId: number = 0;
	vendorName: string = '';
	phone: string = '';
	webSite: string = '';
	email: string = '';
	category: string = '';
	description: string = '';
	glAccount: string = '';
	leadSource: string = '';
	address: Address = new Address();
}
import { Address } from "./Address";
import { Contact } from "./Contact";

export class Account    {
    accountId : number = 0;
	ownerId : number = 0;
	website : string = '';
	fax: string = '';
	accountNumber : string = '';
	contacts : Contact[] = [];
	industry : string = '';
	accountType : string = '';
	phone : string = '';
	annualRevenue : string = '';
	ownerShipType : string = '';
	employees: number = 0;
	shippingAddress : Address = new Address();
	billingAddress : Address = new Address();
	description: string = '';
	sicCode: string = '';
	accountName: string = '';
}
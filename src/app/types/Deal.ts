import { DealStageHistory } from "./DealStageHistory";

export class Deal   {
    salesId: number = 0;
	salesName: string = '';
	accountId: number = 0;
	amount: number = 0;
	LeadSource: string = '';
	contactId: number = 0;
	closingDate: string = '';
	probability: number = 0;
	description: string = '';
	stageHistory: DealStageHistory[] = [];
}
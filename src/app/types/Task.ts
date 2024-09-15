export class Task   {
    taskId: number = 0;
	taskOwnerId: number = 0;
	taskSubject: string = '';
	dueDate: string = '';
	taskStatus: string = '';
	description: string = '';
	isTaskReminderEnabled: boolean = false;
	contactId: number = 0;
}
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountCreateComponent } from './accounts/account-create/account-create.component';
import { AccountListComponent } from './accounts/account-list/account-list.component';
import { CreateContactComponent } from './contacts/create-contact/create-contact.component';
import { ListContactComponent } from './contacts/list-contact/list-contact.component';
import { AddSalesComponent } from './sales/add-sales/add-sales.component';
import { ListSalesComponent } from './sales/list-sales/list-sales.component';
import { TaskAddComponent } from './tasks/task-add/task-add.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { CreateVendorComponent } from './vendors/create-vendor/create-vendor.component';
import { ListVendorComponent } from './vendors/list-vendor/list-vendor.component';

export const routes: Routes = [
    { path: '',component: LoginComponent },
    {path: 'register',component: RegisterComponent},
    {path: 'login',component: LoginComponent},
    {path: 'dashboard',component: DashboardComponent},
    {path: 'accounts/create',component: AccountCreateComponent},
    {path: 'accounts/list',component: AccountListComponent},
    {path: 'contacts/create',component: CreateContactComponent},
    {path: 'contacts/list',component: ListContactComponent},
    {path: 'sales/create',component: AddSalesComponent},
    {path: 'sales/list',component: ListSalesComponent},
    {path: 'task/add',component: TaskAddComponent},
    {path: 'task/list',component: TaskListComponent},
    {path: 'user/create',component: CreateUserComponent},
    {path: 'user/list',component: UserListComponent},
    {path: 'vendor/create',component:CreateVendorComponent},
    {path: 'vendor/list',component: ListVendorComponent}
];

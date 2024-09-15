import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../types/User';
import { Observable } from 'rxjs';
import { ApiResponse } from '../types/ApiResponse';
import { Company } from '../types/Company';
import { Account } from '../types/Account';
import { Contact } from '../types/Contact';
import { Deal } from '../types/Deal';
import { Task } from '../types/Task';
import { Vendor } from '../types/Vendor';
import { LoginResponse } from '../types/LoginResponse';

@Injectable({
  providedIn: 'root'
})
export class CrmApiService {

  constructor(private httpClient: HttpClient) { }
  hostUrl = 'http://localhost:9099/crm/user/';

  callPopulateAccPageDropdownValuesApi() : Observable<any>  {
    return this.httpClient.post<any>(this.hostUrl+'accPg/ddValues',null);
  }

  callPopulateVendorPageDropdownValuesApi() : Observable<any> {
    return this.httpClient.post<any>(this.hostUrl + 'vendorPg/ddValues',null);
  }
  
  callPopulateContactPageDropdownValuesApi() : Observable<any> {
    return this.httpClient.post<any>(this.hostUrl + 'contactPg/ddValues',null);
  }

  callFindUsersByAdminApi() : Observable<User[]>  {
    return this.httpClient.post<User[]>(this.hostUrl + 'findAll',null);
  }

  callSaveUserApi(payload: User): Observable<ApiResponse> {
      return this.httpClient.post<ApiResponse>(this.hostUrl + 'create',payload);    
  }

  callCreateAdminApi(payload: User): Observable<ApiResponse> {
    return this.httpClient.post<ApiResponse>('http://localhost:9099/crm/admin/create',payload);
  }

  callLoginTheUserApi(payload: any): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>('http://localhost:9099/crm/admin/login',payload);
  }

  callSaveCompanyApi(payload: Company): Observable<ApiResponse> {
    return this.httpClient.post<ApiResponse>(this.hostUrl + 'company/create',payload);
  }

  callFindUserApi(payload: any): Observable<User>  {
    return this.httpClient.post<User>(this.hostUrl + 'find',payload);
  }

  callFindCompanyApi(payload: any) :Observable<Company> {
    return this.httpClient.post<Company>(this.hostUrl + 'company/find',payload);
  }

  callSaveAccountApi(payload: Account) : Observable<ApiResponse> {
    return this.httpClient.post<ApiResponse>(this.hostUrl + 'account/create',payload);
  }

  callFindAnAccountApi(payload: any) : Observable<Account>  {
    return this.httpClient.post<Account>(this.hostUrl + 'account/find',payload);
  }

  callListAccountsOfUserApi() : Observable<Account[]> {
    return this.httpClient.post<Account[]>(this.hostUrl + 'accounts/find',null);
  }

  callSaveContactApi(payload: Contact) : Observable<ApiResponse> {
    return this.httpClient.post<ApiResponse>(this.hostUrl + 'account/contact/create',payload);
  }

  callFindContactApi(payload : any) : Observable<Contact>  {
    return this.httpClient.post<Contact>(this.hostUrl + 'account/contact/find',payload);
  }

  callFindAccountContactsApi(payload: any) : Observable<Contact[]>  {
    return this.httpClient.post<Contact[]>(this.hostUrl + 'account/contacts',payload);
  }

  callFindUserContactsApi(payload: any) : Observable<Contact[]> {
    return this.httpClient.post<Contact[]>(this.hostUrl + 'contacts',payload);
  } 

  callAddSalesApi(payload: Deal) : Observable<ApiResponse> {
    return this.httpClient.post<ApiResponse>(this.hostUrl + 'sales/add',payload);
  }

  callFindSaleApi(payload : any) : Observable<Deal>  {
    return this.httpClient.post<Deal>(this.hostUrl + 'sale/find',payload);
  }

  callFindAccountSalesApi(payload : any) : Observable<Deal[]> {
    return this.httpClient.post<Deal[]>(this.hostUrl + 'account/sales/find',payload);
  }

  callFindContactSalesApi(payload: any) : Observable<Deal[]>  {
    return this.httpClient.post<Deal[]>(this.hostUrl + 'contact/sales/find',payload);
  }

  callFindUserSalesApi(payload: any) : Observable<Deal[]> {
    return this.httpClient.post<Deal[]>(this.hostUrl + 'sales/find',payload);
  }

  callCreateTaskApi(payload: Task): Observable<ApiResponse> {
    return this.httpClient.post<ApiResponse>(this.hostUrl + 'task/create',payload);
  }

  callFindATaskApi(payload : any): Observable<Task> {
    return this.httpClient.post<Task>(this.hostUrl + 'task/find',payload);
  }

  callFindTasksOfAssigneeApi(payload: any) : Observable<Task[]> {
    return this.httpClient.post<Task[]>(this.hostUrl + 'tasks/assignee/find',payload);
  }

  callFindTasksOfOwnerApi(payload: any) : Observable<Task[]> {
    return this.httpClient.post<Task[]>(this.hostUrl + 'tasks/owner/find',payload);
  }

  callAddVendorApi(payload: Vendor) : Observable<ApiResponse> {
    return this.httpClient.post<ApiResponse>(this.hostUrl + 'vendor/add',payload);
  }

  callFindVendorApi(payload: any) : Observable<Vendor>  {
    return this.httpClient.post<Vendor>(this.hostUrl + 'vendor/find',payload);
  }

  callListVendorsApi() : Observable<Vendor[]> {
    return this.httpClient.post<Vendor[]>(this.hostUrl + 'vendors',null);
  }
  
}

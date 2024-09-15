import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { HeaderComponent } from '../../header/header.component';
import { Account } from '../../types/Account';
import { CrmApiService } from '../../services/crm-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account-list',
  standalone: true,
  imports: [SidebarComponent,HeaderComponent,CommonModule],
  templateUrl: './account-list.component.html',
  styleUrl: './account-list.component.css'
})
export class AccountListComponent implements OnInit {

  accounts: Account[] = [];

  constructor(private apiService: CrmApiService)  {}

  ngOnInit(): void {
    this.fetchAccounts();
  }

  fetchAccounts() : void  {
    this.apiService.callListAccountsOfUserApi().subscribe({
      next: resp => {
        this.accounts = resp;
      },
      error: err => {
        console.log(err);
      }
    })
  }

}

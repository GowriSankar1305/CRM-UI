import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { HeaderComponent } from '../../header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../../types/User';
import { CrmApiService } from '../../services/crm-api.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [SidebarComponent,HeaderComponent,FormsModule,CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private apiService: CrmApiService)  {}
  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() : void {
    this.apiService.callFindUsersByAdminApi().subscribe({
      next: resp => {
        this.users = resp;
      },
      error: err => {
        console.log(err);
      }
    })
  }
}

import { Component, OnInit } from '@angular/core';
import {SidebarComponent} from '../../sidebar/sidebar.component';
import { HeaderComponent } from '../../header/header.component';
import { CrmApiService } from '../../services/crm-api.service';
import { User } from '../../types/User';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Contact } from '../../types/Contact';
import { Account } from '../../types/Account';
import { Address } from '../../types/Address';
import { Constants } from '../../types/Constants';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-contact',
  standalone: true,
  imports: [SidebarComponent,HeaderComponent,FormsModule,CommonModule],
  templateUrl: './create-contact.component.html',
  styleUrl: './create-contact.component.css'
})
export class CreateContactComponent implements OnInit {
  leadSources: string[] = [];
  contactOwners: User[] = [];
  newContact: Contact = new Contact();
  accounts: Account[] = [];
  mailingAddress: Address = new Address();
  otherAddress: Address = new Address();
  btnContent: string = 'Create contact';
  isBtnDisabled: boolean = false;
  ngOnInit(): void {
    this.populateLeadSources();
    this.populateContactOwners();
    this.populateAccountDropdown();
  }
  constructor(private apiService: CrmApiService)  {}

  populateLeadSources() : void  {
    this.apiService.callPopulateContactPageDropdownValuesApi().subscribe({
      next: resp => {
        this.leadSources = resp.leadSources;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  populateContactOwners() : void  {
    this.apiService.callFindUsersByAdminApi().subscribe({
      next: resp => {
        this.contactOwners = resp;
      },
      error: err => {
        console.log(err);
      }
    })
  }
  
  populateAccountDropdown() : void  {
    this.apiService.callListAccountsOfUserApi().subscribe({
      next: resp => {
        this.accounts = resp;
      },
      error: errResp => {
        console.log(errResp);
      }
    });
  }

  saveContact() : void  {
    this.btnContent = Constants.BTN_CONTENT;
    this.isBtnDisabled = true;
    this.newContact.mailingAddress = this.mailingAddress;
    this.newContact.otherAddress = this.otherAddress;
    this.apiService.callSaveContactApi(this.newContact).subscribe({
      next: resp => {
        Swal.fire('Success',resp.message,'success');
        this.mailingAddress = new Address();
        this.otherAddress = new Address();
        this.newContact = new Contact();
        this.btnContent = 'Create contact';
        this.isBtnDisabled = false;
      },
      error: errResp => {
        console.log(errResp);
        this.btnContent = 'Create contact';
        this.isBtnDisabled = false;
        if(errResp.error.message !== null && errResp.error.message) {
          Swal.fire('Error!',errResp.error.message,'error');
        }else {
          let html = '';
          errResp.error.errors.forEach((msg: string,index: number) => {
            html += msg + '<br>';
          });
          Swal.fire({
            icon: 'error',
            title: 'Error',
            html: html,
            confirmButtonText: 'OK'
          });
        }
      }
    });
  }
}

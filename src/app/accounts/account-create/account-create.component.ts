import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { HeaderComponent } from '../../header/header.component';
import { Account } from '../../types/Account';
import { CrmApiService } from '../../services/crm-api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Constants } from '../../types/Constants';
import { User } from '../../types/User';
import Swal from 'sweetalert2';
import { Address } from '../../types/Address';

@Component({
  selector: 'app-account-create',
  standalone: true,
  imports: [SidebarComponent,HeaderComponent,FormsModule,CommonModule],
  templateUrl: './account-create.component.html',
  styleUrl: './account-create.component.css'
})
export class AccountCreateComponent implements OnInit {
  btnContent: string = 'Create account';
  isBtnDisabled: boolean = false;
  newAccount: Account = new Account();
  billingAddrs: Address = new Address();
  shippingAddrs: Address = new Address();
  accOwners: User[] = [];
  accTypes: string[] = [];
  industryTypes: string[] = [];
  ownershipTypes: string[] = [];

  constructor(private crmApiService: CrmApiService) {

  }
  ngOnInit(): void {
    this.populateUsers();
    this.populateDropdowns();
  }
  saveAccount() : void  {
    console.log('------ save account details --------');
    this.btnContent = Constants.BTN_CONTENT;
    this.isBtnDisabled = true;
    this.newAccount.billingAddress = this.billingAddrs;
    this.newAccount.shippingAddress = this.shippingAddrs;
    this.crmApiService.callSaveAccountApi(this.newAccount).subscribe({
      next: response => {
        Swal.fire('Success',response.message,'success');
        this.newAccount = new Account();
        this.billingAddrs = new Address();
        this.shippingAddrs = new Address();
        this.btnContent = 'Create account';
        this.isBtnDisabled = false;
      },
      error: errResp => {
        console.log(errResp);
        this.btnContent = 'Create account';
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
            confirmButtonText: 'OK',
            customClass: {
              popup: 'format-pre'
            }
          });
        }
      }
    });
  }

  populateUsers() : void {
    this.crmApiService.callFindUsersByAdminApi().subscribe({
      next: resp => {
        this.accOwners = resp;
      },
      error: errResp => {
        console.log(errResp);
      }
    });
  }

  populateDropdowns() : void  {
    this.crmApiService.callPopulateAccPageDropdownValuesApi().subscribe({
      next: resp => {
        this.accTypes = resp.accTypes;
        this.industryTypes = resp.industryTypes;
        this.ownershipTypes = resp.ownershipTypes;
      },
      error: err => {
        console.log(err);
      }
    })
  }
}

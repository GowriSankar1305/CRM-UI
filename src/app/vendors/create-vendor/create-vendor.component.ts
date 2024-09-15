import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { HeaderComponent } from '../../header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CrmApiService } from '../../services/crm-api.service';
import { Vendor } from '../../types/Vendor';
import { Address } from '../../types/Address';
import { Constants } from '../../types/Constants';
import Swal from 'sweetalert2';
import { User } from '../../types/User';

@Component({
  selector: 'app-create-vendor',
  standalone: true,
  imports: [SidebarComponent,HeaderComponent,FormsModule,CommonModule],
  templateUrl: './create-vendor.component.html',
  styleUrl: './create-vendor.component.css'
})
export class CreateVendorComponent implements OnInit {
  constructor(private apiService: CrmApiService) {}
  ngOnInit(): void {
    this.populateLedgersDropdown();
    this.populateVendorOwners();
  }
  newVendor :Vendor = new Vendor();
  vendorOwners: User[] = [];
  ledgers: string[] = [];
  address: Address = new Address();
  isBtnDisabled: boolean = false;
  btnContent: string = 'Create vendor';
  
  populateVendorOwners() : void {
    this.apiService.callFindUsersByAdminApi().subscribe({
      next: resp => {
        this.vendorOwners = resp;
      },
      error: err => {
        console.log(err);
      }
    })
  }

  populateLedgersDropdown() : void  {
    this.apiService.callPopulateVendorPageDropdownValuesApi().subscribe({
      next: resp => {
        this.ledgers = resp.ledgers;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  saveVendor() : void {
    this.newVendor.address = this.address;
    this.btnContent = Constants.BTN_CONTENT;
    this.isBtnDisabled = true;
    this.apiService.callAddVendorApi(this.newVendor).subscribe({
      next: resp => {
        Swal.fire('Success',resp.message,'success');
        this.newVendor = new Vendor();
        this.address = new Address();
        this.btnContent = 'Create vendor';
        this.isBtnDisabled = false;
      },
      error: errResp => {
        console.log(errResp);
        this.btnContent = 'Create vendor';
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
}

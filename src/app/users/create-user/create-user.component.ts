import { Component } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { HeaderComponent } from '../../header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CrmApiService } from '../../services/crm-api.service';
import { User } from '../../types/User';
import Swal from 'sweetalert2';
import { Address } from '../../types/Address';
import { Constants } from '../../types/Constants';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [SidebarComponent,HeaderComponent,FormsModule,CommonModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  btnContent: string = 'Create user';
  isBtnDisabled: boolean = false;
  newUser: User = new User();
  address: Address = new Address();
  constructor(private apiService: CrmApiService) {
    
  }
  saveUser() : void {
    this.btnContent = Constants.BTN_CONTENT;
    this.isBtnDisabled = true;
    this.newUser.address = this.address;
    this.apiService.callSaveUserApi(this.newUser).subscribe({
      next: response => {
        Swal.fire('Success',response.message,'success');
        this.address = new Address();
        this.newUser = new User();
        this.btnContent = 'Create user';
        this.isBtnDisabled = false;
      },
      error: errResp => {
        console.log(errResp.error);
        this.btnContent = 'Create user';
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

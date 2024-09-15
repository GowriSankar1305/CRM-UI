import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../types/User';
import { RouterModule } from '@angular/router';
import { Constants } from '../types/Constants';
import { CrmApiService } from '../services/crm-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  newUser : User = new User();
  isBtnDisabled: boolean = false;
  btnContent: string = 'REGISTER';
  errorMsg: string = '';

  constructor(private apiService :CrmApiService) {}
  
  createNewUser() : void  {
    console.log('------creating admin----');
    this.isBtnDisabled = true;
    this.btnContent = Constants.BTN_CONTENT;
    this.apiService.callCreateAdminApi(this.newUser).subscribe({
      next: resp => {
        console.log(resp);
        this.isBtnDisabled = false;
        this.btnContent = 'REGISTER';
        Swal.fire('Success','Account creation successful!','success');
        this.newUser = new User();
      },
      error: errResp => {
        if(null !== errResp.error.errors && errResp.error.errors) {
          let content = '';
          errResp.error.errors.forEach((msg: string,index: number) => {
            content += ((index+1) +' '+msg+'<br>');
          });
          Swal.fire({
            icon: 'error',
            title: 'Error',
            html: content,
            confirmButtonText: 'OK'
          });
          this.isBtnDisabled = false;
          this.btnContent = 'REGISTER';
        }
      }
    });
  }

}

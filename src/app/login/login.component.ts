import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from '../types/User';
import { FormsModule } from '@angular/forms';
import { CrmApiService } from '../services/crm-api.service';
import { StorageService } from '../services/storage.service';
import { Constants } from '../types/Constants';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  btnContent : string = 'LOGIN';
  isBtnDisabled: boolean = false;
  user : User = new User();

  constructor(private apiService: CrmApiService,
    private storageService: StorageService,
    private router: Router) {

    }
  validateTheUser() : void  {
    if(this.user.userEmail.trim() === '' || this.user.userPassword === '')  {
      Swal.fire('Error','Please enter username and password','error');
      return;
    }
    this.isBtnDisabled = true;
    this.btnContent = Constants.BTN_CONTENT;
    const payload = {
      'userName': this.user.userEmail,
      'userPassword': this.user.userPassword
    };
    this.apiService.callLoginTheUserApi(payload).subscribe({
      next: resp => {
        this.storageService.addItem('TOKEN','Bearer ' + resp.token);
        this.storageService.addItem('userId',resp.userId+'');
        this.router.navigate(['/dashboard']);
      },
      error: errResp => {
        console.log(errResp);
        this.isBtnDisabled = false;
        this.btnContent = 'LOGIN';
      }
    })
  }
  
}
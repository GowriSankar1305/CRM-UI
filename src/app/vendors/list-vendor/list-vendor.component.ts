import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { CrmApiService } from '../../services/crm-api.service';
import { Vendor } from '../../types/Vendor';

@Component({
  selector: 'app-list-vendor',
  standalone: true,
  imports: [HeaderComponent,SidebarComponent,CommonModule],
  templateUrl: './list-vendor.component.html',
  styleUrl: './list-vendor.component.css'
})
export class ListVendorComponent implements OnInit {
  vendors: Vendor[] = [];
  constructor(private apiService: CrmApiService) {}
  
  ngOnInit(): void {
    this.fetchVendors();
  }

  fetchVendors() : void {
    this.apiService.callListVendorsApi().subscribe({
      next: resp => {
        this.vendors = resp;
      },
      error: err => {
        console.log(err);
      }
    })    
  }
}

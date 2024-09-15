import { Component } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-add-sales',
  standalone: true,
  imports: [SidebarComponent,HeaderComponent],
  templateUrl: './add-sales.component.html',
  styleUrl: './add-sales.component.css'
})
export class AddSalesComponent {

}

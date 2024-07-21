import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule, BsDropdownModule, RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  accountService = inject(AccountService);
  model:any = {};

  login(){
    this.accountService.login(this.model).subscribe({
      next: response => {console.log(response);},
      error:  error => {console.log(error);},
      complete: ()=>{}
    })

   
    
    
    console.log(this.model);}

    logout(){
      this.accountService.logout();
    }

}
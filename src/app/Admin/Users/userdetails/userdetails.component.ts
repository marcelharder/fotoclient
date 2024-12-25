import { Component, inject, Input } from '@angular/core';
import { User } from '../../../_models/User';
import { UserService } from '../../../_services/user.service';

@Component({
  selector: 'app-userdetails',
  standalone: true,
  imports: [],
  templateUrl: './userdetails.component.html',
  styleUrl: './userdetails.component.css'
})
export class UserdetailsComponent {
  @Input() us: User | undefined;
  private usa = inject(UserService);


  deleteUser(){ if(this.us !== undefined){ this.usa.deleteUser(this.us.UserName);}   }
  editUser(){if(this.us !== undefined){ this.usa.editUser(this.us);}}

}

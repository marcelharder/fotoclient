import { Component, inject, Input } from '@angular/core';
import { User } from '../../../_models/User';
import { UserService } from '../../../_services/user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  userservice = inject(UserService);
  route = inject(Router);
  us: User = {
    UserName: '',
    Token: '',
    Created: new Date,
    paidTill: new Date,
    password: '',
    email: '',
    gender: '',
    mobile: ''
  };


  register() {
    if(this.us.email !== ''){
    this.userservice.registerUser(this.us).subscribe(
      {
        next: (data) => {
        },
      }
    )
  }
  }

  cancel() { this.route.navigateByUrl("/") }

}

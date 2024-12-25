import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../_models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http = inject(HttpClient);
  baseUrl = environment.apiUrl;

  constructor() { }

  getAllUsers(){ return this.http.get<User[]>(this.baseUrl + 'User/getAllUsers')  }

  deleteUser(name: string){ return this.http.delete<string>(this.baseUrl + 'User/deleteUser' + name)}

  editUser(us: User){return this.http.put<string>(this.baseUrl + 'User/editUser', us)}



}

import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { User } from '../_models/User';
import { map } from 'rxjs';
import { environment } from '../../environments/environment';
import { categoryModel } from '../_models/categoryModel';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  http = inject(HttpClient);
  baseUrl = environment.apiUrl;
  private categoryService = inject(CategoryService);
  currentUser = signal<User | null>(null);
  CatArray = signal<categoryModel[] | null>(null);

  login(model: any){
    return this.http.post<User>(this.baseUrl + 'account/login', model).pipe(
      map(user => {
     
        if(user){localStorage.setItem('user', JSON.stringify(user));}
        this.currentUser.set(user);

        this.categoryService.getAllowedCategories().subscribe({
          next:  response => this.CatArray.set(response),
          error: ()=>{},
          complete: ()=>{}
        }) 


      })
    );
  }

  logout(){
    localStorage.removeItem('user');
    this.currentUser.set(null);
  }

  
}

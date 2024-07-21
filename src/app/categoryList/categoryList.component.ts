import { Component, OnInit, inject } from '@angular/core';
import { CategoryService } from '../_services/category.service';
import { categoryModel } from '../_models/categoryModel';
import { CategoryDetailsComponent } from '../categoryDetails/categoryDetails.component';
import { NgFor } from '@angular/common';
import { AccountService } from '../_services/account.service';

@Component({
    selector: 'app-categoryList',
    standalone: true,
    templateUrl: './categoryList.component.html',
    styleUrls: ['./categoryList.component.css'],
    imports: [CategoryDetailsComponent,NgFor]
})
export class CategoryListComponent implements OnInit{
  accountService = inject(AccountService);
  SeriesArray: Array<categoryModel> | null = [];

  ngOnInit(){
   // get the array from the account service signal
   this.SeriesArray = this.accountService.CatArray();

debugger;

   /*  this.categoryService.getAllowedCategories().subscribe({
      next:  response => this.SeriesArray = response,
      error: ()=>{},
      complete: ()=>{}
    }) 
      */
  }


  

}

import { Component, OnInit, inject } from '@angular/core';
import { CategoryService } from '../../_services/category.service';
import { categoryModel } from '../../_models/categoryModel';
import { CategoryDetailsComponent } from '../categoryDetails/categoryDetails.component';
import { NgFor } from '@angular/common';
import { AccountService } from '../../_services/account.service';
import { catchError } from 'rxjs';

@Component({
    selector: 'app-categoryList',
    standalone: true,
    templateUrl: './categoryList.component.html',
    styleUrls: ['./categoryList.component.css'],
    imports: [CategoryDetailsComponent,NgFor]
})
export class CategoryListComponent implements OnInit{
  accountService = inject(AccountService);
  catservice = inject(CategoryService);
  pageNumber = 1;
  pageSize = 9;

  ngOnInit(){
   // get the array from the account service signal
   //this.SeriesArray = this.accountService.CatArray();
  if(!this.catservice.paginatedResult()){
    this.loadCategories();
  }

  }

  loadCategories(){
    this.catservice.getAllowedCategories(this.pageNumber, this.pageSize);
  }
  

}

import { HttpClient, HttpClientModule, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { categoryModel } from '../_models/categoryModel';
import { PaginatedResult } from '../_models/pagination';
import { catParams } from '../_models/catParams';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private http = inject(HttpClient);
  baseUrl = environment.apiUrl;
  paginatedResult = signal<PaginatedResult<categoryModel[]> | null>(null);
  cat: catParams = {
    pageNumber: 0,
    pageSize: 0
  };
  categoryCache = new Map();

  getAllowedCategories(pageNumber?:number, pageSize?:number){
    
    if(pageNumber && pageSize){
    this.cat.pageNumber = pageNumber;
    this.cat.pageSize = pageSize;
    }

   const response = this.categoryCache.get(Object.values(this.cat).join('-'));
   if(response) return this.setPaginatedResponse(response);

    let params = new HttpParams();

    if(pageNumber && pageSize){
      params = params.append('PageNumber',pageNumber);
      params = params.append('PageSize',pageSize);
    }

    return this.http.get<categoryModel[]>(this.baseUrl + 'Category/getAllowedCategories', {observe: 'response', params}).subscribe({
      next: response => {
       this.setPaginatedResponse(response);
       this.categoryCache.set(Object.values(this.cat).join('-'), response);
      }
    })
  
  }

  private setPaginatedResponse(response: HttpResponse<categoryModel[]>){
    this.paginatedResult.set({
      items: response.body as categoryModel[],
      pagination: JSON.parse(response.headers.get('Pagination')!)
    })
  }

  getDescription(category: any){
    return this.http.get<string>(this.baseUrl + 'Category/getDescription/' + category)
  }

  
}

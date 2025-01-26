import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { categoryModel } from '../_models/categoryModel';
import { PaginatedResult } from '../_models/pagination';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private http = inject(HttpClient);
  baseUrl = environment.apiUrl;
  paginatedResult = signal<PaginatedResult<categoryModel[]> | null>(null);





  getAllowedCategories(pageNumber?:number, pageSize?:number){

    let params = new HttpParams();

    if(pageNumber && pageSize){
      params = params.append('PageNumber',pageNumber);
      params = params.append('PageSize',pageSize);
    }

    return this.http.get<categoryModel[]>(this.baseUrl + 'Category/getAllowedCategories', {observe: 'response', params}).subscribe({
      next: response => {
        this.paginatedResult.set({
          items: response.body as categoryModel[],
          pagination: JSON.parse(response.headers.get('Pagination')!)
        })
        
      }
    })
  
  
  
  
  
  
  }

  getDescription(category: any){
    return this.http.get<string>(this.baseUrl + 'Category/getDescription/' + category)
  }

  
}

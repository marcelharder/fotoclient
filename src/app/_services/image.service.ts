import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { slideModel } from '../_models/slideModel';
import { CarouselModel } from '../_models/CarouselModel';
import { catParams } from '../_models/catParams';
import { PaginatedResult } from '../_models/pagination';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  http = inject(HttpClient);
  baseUrl = environment.apiUrl;
  paginatedResult = signal<PaginatedResult<slideModel[]> | null>(null);
  imageCache = new Map();
  img: catParams = {
    pageNumber: 0,
    pageSize: 0
  };

  constructor() { }

  getDiasFromCategory(x: number, pageNumber?: number, pageSize?: number) {

    let params = new HttpParams();

    if (pageNumber && pageSize) {
      params = params.append('PageNumber', pageNumber);
      params = params.append('PageSize', pageSize);
    }

    const response = this.imageCache.get(Object.values(this.img).join('-'));
    if (response) return this.setPaginatedResponse(response);

    return this.http.get<slideModel[]>(this.baseUrl + 'Images/getImagesByCategory/' + x, { observe: 'response', params }).subscribe({
      next: response => {
        this.setPaginatedResponse(response);
        this.imageCache.set(Object.values(this.img).join('-'), response);
      }
    })
  }


  getCarouselData(id: string) {
    return this.http.get<CarouselModel>(this.baseUrl + 'Images/getCarousel/' + id)
  }
  getSpecificFileFromId(id: string) {
    return this.http.get<slideModel>(this.baseUrl + 'Images/findImage/' + id)
  }

  private setPaginatedResponse(response: HttpResponse<slideModel[]>) {
    this.paginatedResult.set({
      items: response.body as slideModel[],
      pagination: JSON.parse(response.headers.get('Pagination')!)
    })
  }
}

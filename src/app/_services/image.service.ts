import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { slideModel } from '../_models/slideModel';
import { CarouselModel } from '../_models/CarouselModel';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  http = inject(HttpClient);
  baseUrl = environment.apiUrl;

  constructor() { }

  getDiasFromCategory(cat: number){
    return this.http.get<slideModel[]>(this.baseUrl + 'Images/getImagesByCategory/' + cat)
  }
  getCarouselData(id: string){
    return this.http.get<CarouselModel>(this.baseUrl + 'Images/getCarousel/' + id)
  }
  getSpecificFileFromId(id:string){
    return this.http.get<slideModel>(this.baseUrl + 'Images/findImage/' + id)
  }
}

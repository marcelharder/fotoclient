import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { slideModel } from '../_models/slideModel';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  http = inject(HttpClient);
  baseUrl = environment.apiUrl;

  constructor() { }

  getDiasFromCategory(cat: number){
    return this.http.get<slideModel[]>(this.baseUrl + 'Image/getImages')
  }
}

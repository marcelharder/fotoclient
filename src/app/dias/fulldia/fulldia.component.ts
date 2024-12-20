import { Component, inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { ImageService } from '../../_services/image.service';
import { CarouselModel } from '../../_models/CarouselModel';
import { NgIf } from '@angular/common';
import { slideModel } from '../../_models/slideModel';

@Component({
  selector: 'app-fulldia',
  standalone: true,
  imports: [NgIf],
  templateUrl: './fulldia.component.html',
  styleUrl: './fulldia.component.css',
})
export class FulldiaComponent implements OnInit {
  baseUrl = environment.apiUrl;
  numberOfSlides = 0;
  @Input() id = '';
  imgService = inject(ImageService);
  router = inject(Router);
  carouselData: CarouselModel = {
    numberOfImages: 0,
    category: 0,
    ShowR: false,
    ShowL: false,
    nextImageIdR: '',
    nextImageIdL: '',
  };
  sm: slideModel = {
    Id: '',
    ImageUrl: '',
    YearTaken: '',
    Location: '',
    Familie: '',
    Category: 0,
    Quality: '',
    Series: '',
    Spare1: '',
    Spare2: '',
    Spare3: '',
  };

  ngOnInit(): void {
    // get the route id
    if (this.id) {
      this.imgService.getCarouselData(this.id).subscribe({
        next: (data) => {
          this.carouselData = data;
        },
      });
    }
  }

  showDiaDetails(){}

  getSlideNumber(): string {
    return '1';
  }

  getFotoFile(id: string) {
    return this.baseUrl + 'Images/getFullImageFile/' + id;
  }
  leftButtonClicked() {
  
    // link to this page with nextImageIdL queryParam
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/fulldia/' + this.carouselData.nextImageIdL]);
  }
  rightButtonClicked() {
    
    // link to this page with nextImageIdR queryParam
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/fulldia/' + this.carouselData.nextImageIdR]);
  }

  backToArray() {
    this.router.navigate(['/categoryList']);
  }

  showOnlyOneSlide() {
    if (this.carouselData.numberOfImages == 0) {
      return true;
    } else {
      return false;
    }
  }

  showTheLeftButton() {
    if (this.carouselData.ShowL) {
      return true;
    } else {
      return false;
    }
  }
  showTheRightButton() {
    if (this.carouselData.ShowR) {
      return true;
    } else {
      return false;
    }
  }
}

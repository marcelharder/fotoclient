import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { ImageService } from '../../_services/image.service';
import { CarouselModel } from '../../_models/CarouselModel';

@Component({
  selector: 'app-fulldia',
  standalone: true,
  imports: [],
  templateUrl: './fulldia.component.html',
  styleUrl: './fulldia.component.css',
})
export class FulldiaComponent implements OnInit {
  baseUrl = environment.apiUrl;
  @Input() id = '';
  imgService = inject(ImageService);
  router = inject(Router);
  carouselData: CarouselModel = {
    numberOfImages: 0,
    category: 0,
    showR: false,
    showL: false,
    nextImageIdR: '',
    nextImageIdL: '',
  };

  ngOnInit(): void {
    // get the route id
    if (this.id) {
      this.imgService.getCarouselData(this.id).subscribe({
        next: (data) => {
          debugger;
          this.carouselData = data;
        },
      });
    }
  }

  getFotoFile(id: string) {
    return this.baseUrl + 'Images/getFullImageFile/' + id;
  }
  leftButtonClicked(){
    // link to this page with nextImageIdL queryParam
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/fulldia/' + this.carouselData.nextImageIdL]);
  }
  rightButtonClicked(){
    // link to this page with nextImageIdR queryParam
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/fulldia/' + this.carouselData.nextImageIdR]);
  }

  backToArray(){this.router.navigate(['/categoryList']);}

  showOnlyOneSlide(){if(this.carouselData.numberOfImages == 0) {return true;} else {return false;}}
  showTheRightButton(){if(this.carouselData.showR) {return true;} else {return false;}}
  showTheLeftButton(){if(this.carouselData.showL) {return true;} else {return false;}}



}

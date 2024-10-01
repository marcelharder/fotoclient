import { Component, Input, OnInit, inject } from '@angular/core';
import { categoryModel } from '../../_models/categoryModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoryDetails',
  standalone: true,
  imports: [],
  templateUrl: './categoryDetails.component.html',
  styleUrls: ['./categoryDetails.component.css']
})
export class CategoryDetailsComponent {
  private router = inject(Router);

  @Input() selectedCategory: categoryModel = {
    Id: 0,
    Description: '',
    MainPhoto: '',
  };

  /*  slides: {image: string; text?: string}[] = [
    {image: 'assets/dias/baden-baden/0.jpg',text: "Aan de wandel"},
    {image: 'assets/dias/baden-baden/1.jpg', text: "Waar is mijn bier ?"},
    {image: 'assets/dias/baden-baden/0.jpg'}
  ];
  activeSlideIndex = 0; */

  

  ngOnInit() {
    // get all the slides that come with this category
  }
  goDetails(id: number) {
    this.router.navigate(['/diaList/'+id]);
  }

}

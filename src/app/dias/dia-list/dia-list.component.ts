import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { slideModel } from '../../_models/slideModel';
import { ImageService } from '../../_services/image.service';
import { environment } from '../../../environments/environment';
import { DiasDetailsComponent } from "../dias-details/dias-details.component";

@Component({
  selector: 'app-dia-list',
  standalone: true,
  imports: [DiasDetailsComponent],
  templateUrl: './dia-list.component.html',
  styleUrl: './dia-list.component.css',
})
export class DiaListComponent implements OnInit {
  baseUrl = environment.apiUrl;
  private route = inject(ActivatedRoute);
  private imageS = inject(ImageService);
  listOfFotos: slideModel[] = [];
  eersteFoto = '';
  aantalSlides = 0;
  item = 1;

  ngOnInit(): void {
    this.route.data.subscribe({
      next: (data) => {
        this.listOfFotos = data['lof'].Value;
        this.eersteFoto = this.getImageFromServer(this.listOfFotos[0].Id);
        this.aantalSlides = this.listOfFotos.length;
      },
    });
  }

  getImageFromServer(id: string) {
    return this.baseUrl + "Images/getImageFile/" + id;
  }
}

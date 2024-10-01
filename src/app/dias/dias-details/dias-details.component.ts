import { Component, input } from '@angular/core';
import { slideModel } from '../../_models/slideModel';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-dias-details',
  standalone: true,
  imports: [],
  templateUrl: './dias-details.component.html',
  styleUrl: './dias-details.component.css'
})
export class DiasDetailsComponent {
  baseUrl = environment.apiUrl;
dia = input.required<slideModel>();

getImageFromServer(id: string) {
  return this.baseUrl + "Images/getImageFile/" + id;
}

}

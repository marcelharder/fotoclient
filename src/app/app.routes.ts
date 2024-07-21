import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryListComponent } from './categoryList/categoryList.component';
import { MemberCardComponent } from './member-card/member-card.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { AboutComponent } from './About/About.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'categoryList', component: CategoryListComponent},
  { path: 'memberCard/:id', component: MemberCardComponent},
  { path: 'imageViewer/:id', component: ImageViewerComponent},
  { path: '**', component: HomeComponent, pathMatch: 'full'}
];

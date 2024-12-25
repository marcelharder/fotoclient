import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryListComponent } from './dias/categoryList/categoryList.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { AboutComponent } from './About/About.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { TapeListComponent } from './tape-list/tape-list.component';
import { DiaListComponent } from './dias/dia-list/dia-list.component';
import { DiaListResolver } from './_resolvers/dia-list.resolver';
import { FulldiaComponent } from './dias/fulldia/fulldia.component';
import { fulldiaResolver } from './_resolvers/fulldia.resolver';
import { DashboardComponent } from './Admin/Users/dashboard/dashboard.component';
import { UserResolver } from './_resolvers/user.resolver';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'categoryList', component: CategoryListComponent},
  { path: 'photoList', component: PhotoListComponent},
  { path: 'tapeList', component: TapeListComponent},
  { path: 'diaList/:id', component: DiaListComponent, resolve: {lof: DiaListResolver}},
  { path: 'imageViewer/:id', component: ImageViewerComponent},
  { path: 'dashboard', component: DashboardComponent, resolve:{us:UserResolver}},
  { path: 'fulldia/:id', component: FulldiaComponent, resolve: {dia: fulldiaResolver}},
  { path: '**', component: HomeComponent, pathMatch: 'full'}
];

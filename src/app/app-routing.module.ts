import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieListComponent} from './movie-list/movie-list.component';
import {SingleMovieComponent} from './single-movie/single-movie.component';
import {BlankComponent} from './blank-component/blank-component.component';


const routes: Routes = [
  { path: '', redirectTo: 'index.html', pathMatch: 'full' },
  { path: 'movies', component: MovieListComponent},
  { path: 'movie/:id', component: SingleMovieComponent},
  { path: 'detail', component: SingleMovieComponent},
  { path: 'index.html', component: MovieListComponent },
  { path: '**', component: BlankComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

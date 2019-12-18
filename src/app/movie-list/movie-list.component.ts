import { Component, OnInit } from '@angular/core';
import { MoviesResponse} from '../models/movies.model';
import {AppHttpClient} from '../services/app-httpclient.service';
import { timer } from 'rxjs/index';
import {switchMap} from 'rxjs/internal/operators';
import {MoviesItemDetailModel} from '../models/movies.detail.model';
import {MatDialog} from '@angular/material/dialog';
import {DetailModalComponent} from '../detail-modal/detail-modal.component';

const API_URL = 'http://webjetapitest.azurewebsites.net/api/cinemaworld/';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  allMovies: MoviesResponse = new MoviesResponse();
  singleDetail: MoviesItemDetailModel = new MoviesItemDetailModel();

  constructor(private httpClient: AppHttpClient) { }

  ngOnInit() {

    this.requestMovies().subscribe(response => {
        this.allMovies = new MoviesResponse(response);
        this.allMovies.Movies.sort((a, b) =>
          (a.Year > b.Year) ? -1 : 1
        );
        console.log(this.allMovies);
    });
  }

  requestMovies(): any {
    return this.httpClient.get(API_URL + 'movies');
  }

  getDetailsById(id: string) {

    this.httpClient.get(API_URL + 'movie/' + id).subscribe(response => {
      console.log(response);
      this.singleDetail = new MoviesItemDetailModel(response);

    });
  }




}

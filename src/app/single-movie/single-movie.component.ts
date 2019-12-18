import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppHttpClient} from '../services/app-httpclient.service';
import {switchMap} from 'rxjs/internal/operators';
import {MoviesItemDetailModel} from '../models/movies.detail.model';
import {DetailModalComponent} from '../detail-modal/detail-modal.component';
import {MatDialog} from '@angular/material';

const API_URL = 'http://webjetapitest.azurewebsites.net/api/cinemaworld/';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit {

  id: number;
  movieDetail: MoviesItemDetailModel = new MoviesItemDetailModel();


  constructor(private route: ActivatedRoute, private httpClient: AppHttpClient, public dialog: MatDialog) { }

  ngOnInit() {
    this.route.paramMap.pipe(switchMap((param: any) => {
      this.id = param.params.id;
      console.log(this.id);
      return this.httpClient.get(API_URL + 'movie/' + this.id);
    })).subscribe(response => {

      this.movieDetail = new MoviesItemDetailModel(response);
      console.log(this.movieDetail);
    });
  }

  openDialog(detail: MoviesItemDetailModel): void {

    const dialogRef = this.dialog.open(DetailModalComponent, {
      width: '280px',
      height: '180px',
      data: { Price: detail.Price},
    });

    dialogRef.afterClosed().subscribe(data => {
      console.log('The dialog was closed' + data);
    });
  }

}

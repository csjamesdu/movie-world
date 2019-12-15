import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { environment } from '../environments/environment';
import { InMemoryDataService } from './services/in-mem-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import {AppHttpClient} from './services/app-httpclient.service';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailModalComponent } from './detail-modal/detail-modal.component';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ErrorComponentComponent,
    DetailModalComponent
  ],
  entryComponents: [DetailModalComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    environment.production ? [] : HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {apiBase: 'api/cinemaworld/', dataEncapsulation: false }),
    BrowserAnimationsModule,
  ],
  providers: [AppHttpClient,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

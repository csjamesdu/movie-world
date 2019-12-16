import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {MoviesItemDetailModel} from '../models/movies.detail.model';

@Component({
  selector: 'app-detail-modal',
  templateUrl: 'detail-modal.component.html',
})
export class DetailModalComponent implements OnInit {

  detail: MoviesItemDetailModel;

  constructor(
    @Optional() public dialogRef: MatDialogRef<DetailModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {

    this.detail = new MoviesItemDetailModel(this.data);
    console.log(this.detail.Price);
  }

  onCloseClick() {
    this.dialogRef.close();
  }

}

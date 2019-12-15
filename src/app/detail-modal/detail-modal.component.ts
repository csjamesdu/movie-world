import {Component, Inject, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {MoviesItemDetailModel} from '../models/movies.detail.model';

@Component({
  selector: 'app-detail-modal',
  templateUrl: 'detail-modal.component.html',
})
export class DetailModalComponent {

  constructor(
    @Optional() public dialogRef: MatDialogRef<DetailModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: MoviesItemDetailModel) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

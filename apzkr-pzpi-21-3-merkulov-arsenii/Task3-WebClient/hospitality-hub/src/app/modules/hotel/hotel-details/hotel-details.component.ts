import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../../../core/models/dialog-data";
import {HotelService} from "../../../api-proxy/services/hotel.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss']
})
export class HotelDetailsComponent implements OnInit {
  protected hotelForm: FormGroup = this.formBuilder.group({
    id: [''],
    name: ['', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required],
    country: ['', Validators.required],
    zipCode: ['', Validators.required],
    lockServiceUri: ['', Validators.required],
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<HotelDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData<number, null>,
    private readonly hotelService: HotelService,
    private readonly toastr: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    if (!this.data.isEdit) {
      return;
    }

    this.hotelService.apiHotelIdGet$Json({id: this.data.data!})
      .subscribe({
        next: (hotel) => {
          this.hotelForm.patchValue(hotel);
        },
        error: (error) => {
          this.toastr.error(error);
        }
      });
  }

  apply() {
    if (this.data.isEdit) {
      this.hotelService.apiHotelUpdateIdPut({id: this.data.data!, body: this.hotelForm.value})
        .subscribe({
          next: () => {
            this.toastr.success('Hotel updated successfully');
            this.dialogRef.close();
          },
          error: (error) => {
            this.toastr.error(error);
          }
        });
    } else {
      this.hotelService.apiHotelCreatePost({body: this.hotelForm.value})
        .subscribe({
          next: () => {
            this.toastr.success('Hotel added successfully');
            this.dialogRef.close();
          },
          error: (error) => {
            this.toastr.error(error);
          }
        });
    }
  }

}

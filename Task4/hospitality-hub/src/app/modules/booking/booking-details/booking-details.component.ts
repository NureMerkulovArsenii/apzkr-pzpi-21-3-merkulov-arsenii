import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { DialogData } from "../../../core/models/dialog-data";
import { HotelService } from "../../../api-proxy/services/hotel.service";
import { ToastrService } from "ngx-toastr";
import { HotelDetailsComponent } from '../../hotel/hotel-details/hotel-details.component';
import { BookingService, RoomService } from 'src/app/api-proxy/services';
import { RoomResponse } from 'src/app/api-proxy/models';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent implements OnInit {

  protected bookingForm: FormGroup = this.formBuilder.group({
    checkIn: [null, [Validators.required]],
    checkOut: [null, [Validators.required]],
    customerId: [null, [Validators.required]],
    isPaid: [null, [Validators.required]],
    numberOfAdults: [null, [Validators.required]],
    numberOfChildren: [null, [Validators.required]],
    roomId: [null, [Validators.required]],
    roomType: [null, [Validators.required]],
    totalDiscountPercent: [null, [Validators.required]],
    totalPrice: [null, [Validators.required]],
  });

  rooms: RoomResponse[] | null = null;

  constructor(
    private readonly formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<HotelDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData<number, null>,
    private readonly hotelService: HotelService,
    private readonly bookingService: BookingService,
    private readonly roomService: RoomService,
    private readonly toastr: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {

    this.loadRooms();

    if (!this.data.isEdit) {
      return;
    }

    this.bookingService.apiBookingIdGet$Json({ id: this.data.data! })
      .subscribe({
        next: (booking) => {
          this.bookingForm.patchValue(booking);
        },
        error: (error) => {
          this.toastr.error(error);
        }
      });
  }

  loadRooms() {
    this.roomService.apiRoomHotelHotelIdGet$Json({ hotelId: this.data.additionalData! })
      .subscribe({
        next: (rooms) => {
          this.rooms = rooms;
        },
        error: (error) => {
          this.toastr.error(error);
        }
      });
  }

  apply() {
    if (this.data.isEdit) {
      this.hotelService.apiHotelUpdateIdPut({ id: this.data.data!, body: this.bookingForm.value })
        .subscribe({
          next: () => {
            this.toastr.success('Booking updated successfully');
            this.dialogRef.close();
          },
          error: (error) => {
            this.toastr.error(error);
          }
        });
    } else {
      this.hotelService.apiHotelCreatePost({ body: this.bookingForm.value })
        .subscribe({
          next: () => {
            this.toastr.success('Booking added successfully');
            this.dialogRef.close();
          },
          error: (error) => {
            this.toastr.error(error);
          }
        });
    }
  }

}

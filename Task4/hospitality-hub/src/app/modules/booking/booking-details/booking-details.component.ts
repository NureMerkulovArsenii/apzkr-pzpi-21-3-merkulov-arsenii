import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { DialogData } from "../../../core/models/dialog-data";
import { HotelService } from "../../../api-proxy/services/hotel.service";
import { ToastrService } from "ngx-toastr";
import { HotelDetailsComponent } from '../../hotel/hotel-details/hotel-details.component';
import { BookingService, CustomerService, RoomService } from 'src/app/api-proxy/services';
import { ERoomType, FilterCustomerResponse, RoomResponse } from 'src/app/api-proxy/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent implements OnInit {

  protected bookingForm: FormGroup = this.formBuilder.group({
    checkIn: [null, [Validators.required]],
    checkOut: [null, [Validators.required]],
    customer: [null, [Validators.required]],
    numberOfAdults: [1, [Validators.required]],
    numberOfChildren: [0, [Validators.required]],
    room: [null, [Validators.required]],
    totalDiscountPercent: [null],
    totalPrice: [null, [Validators.required]],
    doorLockCode: [null],
  });


  customers$!: Observable<FilterCustomerResponse[]>;

  rooms!: RoomResponse[];

  roomTypes = [
    { id: ERoomType.Economy, name: 'Economy' },
    { id: ERoomType.Standard, name: 'Standard' },
    { id: ERoomType.Deluxe, name: 'Deluxe' }
  ];


  constructor(
    private readonly formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<HotelDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData<number, null>,
    private readonly hotelService: HotelService,
    private readonly bookingService: BookingService,
    private readonly roomService: RoomService,
    private readonly customerService: CustomerService,
    private readonly toastr: ToastrService,
  ) {
  }


  ngOnInit(): void {
    this.loadData();

    this.bookingForm.get('customer')?.valueChanges.subscribe((value) => {
      if (typeof value === 'string') {
        this.filterCustumers(value);
        this.bookingForm.patchValue({
          customerId: value
        });
      }
    });

    this.bookingForm.get('room')?.valueChanges.subscribe((value) => {
      const room = this.rooms.find(r => r.number === value);
      if (room) {
        this.bookingForm.patchValue({
          totalPrice: room.basePrice! - room.basePrice! * room.discountPercent! / 100,
          totalDiscountPercent: room.discountPercent,
          roomId: room.id
        });
      }
    });

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
          this.getCustomerForEdit(booking.customerId!);
          this.getRoomForEdit(booking.roomId!);
        },
        error: (error) => {
          this.toastr.error(error);
        }
      });
  }

  getCustomerForEdit(id: number) {
    this.customerService.apiCustomerIdGet$Json({ id: id })
      .subscribe({
        next: (customer) => {
          this.bookingForm.patchValue({
            customer: customer
          });
        },
        error: (error) => {
          this.toastr.error(error);
        }
      });

  }

  getRoomForEdit(id: number) {
    this.roomService.apiRoomIdGet$Json({ id: id })
      .subscribe({
        next: (room) => {
          this.bookingForm.patchValue({
            room: room
          });
        },
        error: (error) => {
          this.toastr.error(error);
        }
      });
  }

  filterCustumers(searchRequest: string) {
    this.customers$ = this.customerService.apiCustomerFilterGet$Json({ searchRequest: searchRequest });
  }

  displayFn(customer: FilterCustomerResponse): string {
    return customer ? customer.firstName + ' ' + customer.lastName : '';
  }

  displayRoomFn(room: RoomResponse): string {
    return room && room.number ? room.number.toString() : '';
  }

  getRoomDisplayName(room: RoomResponse): string {
    return room.number?.toString() + ' - ' + this.roomTypes.find(r => r.id === room.roomType)?.name;
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
    const customer = this.bookingForm.get('customer')?.value;
    const room = this.bookingForm.get('room')?.value;
    if (this.data.isEdit) {

      this.bookingService.apiBookingUpdatePut({
        body: {
          bookingId: this.data.data!,
          checkIn: this.bookingForm.get('checkIn')?.value,
          checkOut: this.bookingForm.get('checkOut')?.value,
          numberOfAdults: this.bookingForm.get('numberOfAdults')?.value,
          numberOfChildren: this.bookingForm.get('numberOfChildren')?.value,
          roomId: room.id
        }
      })
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
      this.bookingService.apiBookingCreatePost({
        body: {
          hotelId: this.data.additionalData!,
          checkIn: this.bookingForm.get('checkIn')?.value,
          checkOut: this.bookingForm.get('checkOut')?.value,
          customerId: customer.id,
          numberOfAdults: this.bookingForm.get('numberOfAdults')?.value,
          numberOfChildren: this.bookingForm.get('numberOfChildren')?.value,
          roomId: room.id
        }
      })
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

  processCheckIn() {
    this.bookingService.apiBookingCheckinBookingIdCodeCodeCustomerCustomerIdGet({
      bookingId: this.data.data!,
      code: this.bookingForm.get('doorLockCode')?.value!,
      customerId: this.bookingForm.get('customer')?.value.id!
    }).subscribe({
      next: () => {
        this.toastr.success('Check in successful');
        this.dialogRef.close();
      },
      error: (error) => {
        this.toastr.error(error.error.title);
      }

    });

  }

  processCheckOut() {
    this.bookingService.apiBookingCheckoutBookingIdCustomerCustomerIdGet({
      bookingId: this.data.data!,
      customerId: this.bookingForm.get('customer')?.value.id!,
    }).subscribe({
      next: () => {
        this.toastr.success('Check out successful');
        this.dialogRef.close();
      },
      error: (error) => {
        this.toastr.error(error.error.title);
      }

    });

  }

  cancelBooking(){
    this.bookingService.apiBookingCancelCustomerIdBookingBookingIdDelete({
      bookingId: this.data.data!,
      customerId: this.bookingForm.get('customer')?.value.id!,
    }).subscribe({
      next: () => {
        this.toastr.success('Booking canceled successfully');
        this.dialogRef.close();
      },
      error: (error) => {
        this.toastr.error(error.error.title);
      }

    });

  }

}

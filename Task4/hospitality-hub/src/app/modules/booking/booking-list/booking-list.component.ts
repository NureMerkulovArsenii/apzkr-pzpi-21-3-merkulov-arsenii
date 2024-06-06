import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { RoomResponse } from "../../../api-proxy/models/room-response";
import { RoomService } from "../../../api-proxy/services/room.service";
import { MatDialog } from "@angular/material/dialog";
import { DialogService } from "../../../core/services/dialog.service";
import { DialogData } from "../../../core/models/dialog-data";
import { HotelResponse } from "../../../api-proxy/models/hotel-response";
import { ERoomType } from "../../../api-proxy/models/e-room-type";
import { ToastrService } from "ngx-toastr";
import { ERoomStatus } from "../../../api-proxy/models";
import { HotelService } from "../../../api-proxy/services/hotel.service";
import { BookingService } from 'src/app/api-proxy/services';
import { FormControl } from '@angular/forms';
import { BookingDetailsComponent } from '../booking-details/booking-details.component';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss']
})
export class BookingListComponent implements OnInit {
  bookings$!: Observable<RoomResponse[]>;

  selectedHotelId: number | undefined;
  selectedRoomType: number | undefined;
  //checkInDate: Date | undefined;
  //checkoutDate: Date | undefined ;

  checkInDate = new FormControl<Date | null>(null);
  checkOutDate = new FormControl<Date | null>(null);


  protected columnsToDisplay: string[] = [
    'bookingId',
    'checkIn',
    'checkOut',
    'isPaid',
    'numberOfAdults',
    'numberOfChildren',
    'totalPrice',
    'totalDiscountPercent',
    'actions'
  ];

  roomTypes = [
    { id: ERoomType.Economy, name: 'Economy' },
    { id: ERoomType.Standard, name: 'Standard' },
    { id: ERoomType.Deluxe, name: 'Deluxe' }
  ];

  protected hotels!: HotelResponse[];

  constructor(
    private readonly roomService: RoomService,
    private readonly bookingService: BookingService,
    private readonly hotelService: HotelService,
    private readonly dialog: MatDialog,
    private readonly dialogService: DialogService,
    private readonly toastr: ToastrService,
  ) {
    this.getHotels();
  }

  ngOnInit(): void {

  }

  getHotels() {
    this.hotelService.apiHotelGet$Json().subscribe({
      next: (response: HotelResponse[]) => {
        this.hotels = response;
      },
      error: (error: any) => {
        console.log(error)
      }
    });
  }

  applyFilter(): void {
    this.loadBookings();
  }

  loadBookings(): void {
    this.bookings$ = this.bookingService.apiBookingFilterGet$Json({
      HotelId: this.selectedHotelId,
      CheckIn: this.checkInDate.value?.toJSON(),
      CheckOut: this.checkOutDate.value?.toJSON(),
      RoomType: this.selectedRoomType
    });
  }

  addBooking() {
    const dialogRef = this.dialog.open(BookingDetailsComponent, {
      data: { data: null, isEdit: false, additionalData: this.selectedHotelId } as DialogData<number, number>,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadBookings();
    });
  }

  editBooking(id: number) {
    const dialogRef = this.dialog.open(BookingDetailsComponent, {
      data: { data: id, isEdit: true, additionalData: this.selectedHotelId } as DialogData<number, number>,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadBookings();
    });
  }

  deleteRoom(id: number) {
    this.dialogService.openDialog({
      data: {
        title: "Delete room",
        message: "Are you sure you want to delete this room?",
        okButtonText: "Delete",
        cancelButtonText: "Cancel"
      },
      onClose: (result) => {
        if (result) {
          this.applyDelete(id);
        }
      }
    });
  }

  applyDelete(id: number) {
    this.roomService.apiRoomIdDelete({ id })
      .subscribe(() => {
        this.loadBookings();
        this.toastr.success('Room deleted successfully');
      });
  }

}

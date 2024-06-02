import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {RoomResponse} from "../../../api-proxy/models/room-response";
import {RoomService} from "../../../api-proxy/services/room.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogService} from "../../../core/services/dialog.service";
import {DialogData} from "../../../core/models/dialog-data";
import {HotelResponse} from "../../../api-proxy/models/hotel-response";
import {RoomDetailsComponent} from "../room-details/room-details.component";
import {ERoomType} from "../../../api-proxy/models/e-room-type";
import {ToastrService} from "ngx-toastr";
import {ERoomStatus} from "../../../api-proxy/models";
import {HotelService} from "../../../api-proxy/services/hotel.service";

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomListComponent implements OnInit {
  rooms$!: Observable<RoomResponse[]>;
  selectedHotelId: number | null = null;
  protected columnsToDisplay: string[] = [
    'number',
    'stage',
    'roomType',
    'status',
    'basePrice',
    'discountPercent',
    'baseLockUri',
    'actions'
  ];

  roomTypes = [
    { id: ERoomType.Economy, name: 'Economy' },
    { id: ERoomType.Standard, name: 'Standard' },
    { id: ERoomType.Deluxe, name: 'Deluxe' }
  ];

  roomStatuses = [
    {id: ERoomStatus.Available, name: 'Available'},
    {id: ERoomStatus.Occupied, name: 'Occupied'},
    {id: ERoomStatus.Maintenance, name: 'Maintenance'},
    {id: ERoomStatus.Reserved, name: 'Reserved'}
  ];

  protected hotels!: HotelResponse[];

  constructor(
    private readonly roomService: RoomService,
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
      next: (response:HotelResponse[]) => {
        this.hotels = response;
      },
      error: (error:any) => {
        console.log(error)
      }
    });
  }

  applyFilter(): void {
    this.loadRooms();
  }

  loadRooms(): void {
    this.rooms$ = this.roomService.apiRoomHotelHotelIdGet$Json({hotelId: this.selectedHotelId!});
  }

  addRoom() {
    const dialogRef = this.dialog.open(RoomDetailsComponent, {
      data: {data: null, isEdit: false} as DialogData<number, null>,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadRooms();
    });
  }

  editRoom(id: number) {
    const dialogRef = this.dialog.open(RoomDetailsComponent, {
      data: {data: id, isEdit: true} as DialogData<number, null>,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadRooms();
    });
  }

  deleteRoom(id:number) {
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

  applyDelete(id
                :
                number
  ) {
    this.roomService.apiRoomIdDelete({id})
      .subscribe(() => {
        this.loadRooms();
        this.toastr.success('Room deleted successfully');
      });
  }

}

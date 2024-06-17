import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../../../core/models/dialog-data";
import {ToastrService} from "ngx-toastr";
import {RoomService} from "../../../api-proxy/services/room.service";
import {HotelService} from "../../../api-proxy/services/hotel.service";
import {HotelResponse} from "../../../api-proxy/models/hotel-response";
import {ERoomType} from "../../../api-proxy/models/e-room-type";
import {ERoomStatus} from "../../../api-proxy/models/e-room-status";

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomDetailsComponent implements OnInit {

  protected roomForm: FormGroup = this.formBuilder.group({
    id: [''],
    hotelId: ['', Validators.required],
    number: ['', Validators.required],
    stage: ['', Validators.required],
    roomType: ['', Validators.required],
    basePrice: ['', Validators.required],
    discountPercent: ['', Validators.required],
    baseLockUri: ['', Validators.required],
    status: ['', Validators.required]
  });

  protected hotels!: HotelResponse[];

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


  constructor(
    private readonly formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<RoomDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData<number, null>,
    private readonly roomService: RoomService,
    private readonly hotelService: HotelService,
    private readonly toastr: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.loadHotels();

    if (!this.data.isEdit) {
      return;
    }

    this.roomService.apiRoomIdGet$Json({id: this.data.data!})
      .subscribe({
        next: (room) => {
          console.log(room);
          this.roomForm.patchValue(room)
        },
        error: (error) => {
          this.toastr.error(error);
        }
      });

  }

  loadHotels() {
    this.hotelService.apiHotelGet$Json().subscribe({
      next: (response) => {
        this.hotels = response;
      },
      error: (error) => {
        console.log(error)
      }
    });
  }

  apply() {
    if (this.data.isEdit) {
      this.roomService.apiRoomUpdatePut({body: this.roomForm.value})
        .subscribe({
          next: () => {
            this.toastr.success('Room updated successfully');
            this.dialogRef.close();
          },
          error: (error) => {
            this.toastr.error(error);
          }
        });
    } else {
      this.roomService.apiRoomCreatePost({body: this.roomForm.value})
        .subscribe({
          next: () => {
            this.toastr.success('Room added successfully');
            this.dialogRef.close();
          },
          error: (error) => {
            this.toastr.error(error);
          }
        });
    }
  }


}

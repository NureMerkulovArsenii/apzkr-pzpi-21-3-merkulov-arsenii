import {Component, OnInit} from '@angular/core';
import {HotelService} from "../../../api-proxy/services/hotel.service";
import {Observable} from "rxjs";
import {HotelResponse} from "../../../api-proxy/models/hotel-response";
import {DialogService} from "../../../core/services/dialog.service";
import {HotelDetailsComponent} from "../hotel-details/hotel-details.component";
import {DialogData} from "../../../core/models/dialog-data";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})

export class HotelListComponent implements OnInit {
  hotels$!: Observable<HotelResponse[]>;
  protected columnsToDisplay: string[] = [
    'name',
    'city',
    'country',
    'address',
    'zipCode',
    'lockServiceUri',
    'actions'
  ];

  constructor(
    private readonly dialog: MatDialog,
    private readonly hotelService: HotelService,
    private readonly dialogService: DialogService
  ) {
  }

  ngOnInit(): void {
    this.loadHotels();

  }

  loadHotels(): void {
    this.hotels$ = this.hotelService.apiHotelGet$Json();
  }

  addHotel() {
    const dialogRef = this.dialog.open(HotelDetailsComponent, {
      data: {data: null, isEdit: false} as DialogData<number, null>,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadHotels();
    });
  }

  editHotel(id: number) {
    const dialogRef = this.dialog.open(HotelDetailsComponent, {
      data: {data: id, isEdit: true} as DialogData<number, null>,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadHotels();
    });
  }

  deleteHotel(id: number) {
    this.dialogService.openDialog({
      data: {
        title: "Delete ruleset",
        message: "Are you sure you want to delete this hotel?",
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
    this.hotelService.apiHotelDeleteIdDelete({id})
      .subscribe(() => {
        this.loadHotels();
      });
  }
}

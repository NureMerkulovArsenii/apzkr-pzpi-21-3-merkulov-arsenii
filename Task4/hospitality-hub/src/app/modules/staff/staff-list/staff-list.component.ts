import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { RecordResponseDto, StaffResponse } from 'src/app/api-proxy/models';
import { HotelService, StaffService } from 'src/app/api-proxy/services';
import { DialogService } from 'src/app/core/services/dialog.service';
import { StaffDialogComponent } from '../staff-dialog/staff-dialog.component';
import { DialogData } from 'src/app/core/models/dialog-data';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {

  protected staffList$!: Observable<StaffResponse[]>;

  protected selectedHotelId!: number;

  protected columnsToDisplay: string[] = [
    'userFullName',
    'position',
    'activeTasksCount',
    'actions'
  ];

  protected hotels$!: Observable<Array<RecordResponseDto>>;

  constructor(
    private readonly staffService: StaffService,
    private readonly dialog: MatDialog,
    private readonly dialogService: DialogService,
    private readonly toastr: ToastrService,
    private readonly hotelService: HotelService,
    private readonly router: Router,
  ) {

  }

  ngOnInit(): void {
    this.loadHotels();
  }

  loadHotels() {
    this.hotels$ = this.hotelService.apiHotelGet$Json();
  }

  applyFilter(): void {
    this.loadStaff();
  }

  loadStaff(): void {
    this.staffList$ = this.staffService.apiStaffHotelHotelIdGet$Json({ hotelId: this.selectedHotelId! });
  }

  addStaff() {
    const dialogRef = this.dialog.open(StaffDialogComponent, {
      data: { data: null, isEdit: false } as DialogData<number, null>,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadStaff();
    });

  }


  editStaff(id: number) {
    const dialogRef = this.dialog.open(StaffDialogComponent, {
      data: { data: id, isEdit: true } as DialogData<number, null>,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadStaff();
    });
  }

  deleteStaff(id: number) {
    this.dialogService.openDialog({
      data: {
        title: "Delete staff",
        message: "Are you sure you want to delete this staff?",
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
    this.staffService.apiStaffStaffIdRemoveDelete({ staffId: id })
      .subscribe(() => {
        this.loadStaff();
        this.toastr.success('User deleted successfully');
      });
  }
}
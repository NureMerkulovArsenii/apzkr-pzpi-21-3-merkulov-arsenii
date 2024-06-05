import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { DialogData } from "../../../core/models/dialog-data";
import { ToastrService } from "ngx-toastr";
import { AccountService, HotelService, StaffService } from 'src/app/api-proxy/services';
import { HotelResponse, UserResponseDto } from 'src/app/api-proxy/models';

@Component({
  selector: 'app-staff-dialog',
  templateUrl: './staff-dialog.component.html',
  styleUrls: ['./staff-dialog.component.scss']
})
export class StaffDialogComponent implements OnInit {

  protected staffForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    secondName: [''],
    userId: [''],
    hotelId: ['', Validators.required],
    position: ['', Validators.required]
  });

  protected hotels: HotelResponse[] = [];

  protected users: UserResponseDto[] = [];

  constructor(
    private readonly formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<StaffDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData<number, null>,
    private readonly staffService: StaffService,
    private readonly hotelService: HotelService,
    private readonly accountService: AccountService,
    private readonly toastr: ToastrService
  ) { }


  ngOnInit(): void {
    this.loadHotels();
    this.loadUsers();

    if (this.data.isEdit) {
      this.loadStaff();
    }
  }

  loadStaff() {
    this.staffService.apiStaffStaffIdGet$Json({ staffId: this.data.data! }).subscribe({
      next: (response) => {
        this.staffForm.patchValue(response);
      },
      error: (error) => {
        console.log(error)
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

  loadUsers() {
    this.accountService.apiAccountUsersGet$Json().subscribe({
      next: (response) => {
        this.users = response;
      },
      error: (error) => {
        console.log(error)
      }
    });

  }



  apply() {
    if (this.data.isEdit) {
      this.updateStaff();
    } else {
      this.createStaff();
    }
    
  }

  createStaff(): void {
    this.staffService.apiStaffCreatePost({ body: this.staffForm.value })
    .subscribe(() => {
      this.dialogRef.close();
    });
  }

  updateStaff(): void {
    this.staffService.apiStaffStaffIdUpdatePut({ staffId: this.data.data!, body: this.staffForm.value })
    .subscribe(() => {
      this.dialogRef.close();
    });
  }

}

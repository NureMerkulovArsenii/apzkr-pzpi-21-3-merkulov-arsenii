import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";
import { DialogData } from "../../../core/models/dialog-data";
import { ToastrService } from "ngx-toastr";
import { AccountService, HotelService, StaffService } from 'src/app/api-proxy/services';
import { HotelResponse, UserResponseDto } from 'src/app/api-proxy/models';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { DialogService } from 'src/app/core/services/dialog.service';

@Component({
  selector: 'staff-details-dialog',
  templateUrl: './staff-details.component.html',
  styleUrls: ['./staff-details.component.scss']
})
export class StaffDetailsComponent implements OnInit {

  protected staffForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    secondName: [''],
    userId: [''],
    hotelId: ['', Validators.required],
    position: ['', Validators.required]
  });

  columnsToDisplay: string[] = [
    'description',
    'dueDate',
    'isCompleted',
    'isFinished',
    'issuedDate',
    'completedDate',
    'actions'
  ];

  protected hotels: HotelResponse[] = [];

  protected users: UserResponseDto[] = [];
  id: number | null = null;
  staffTasks$: any;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly staffService: StaffService,
    private readonly hotelService: HotelService,
    private readonly accountService: AccountService,
    private readonly dialog: MatDialog,
    private readonly dialogService: DialogService,
    private readonly toastr: ToastrService,
    private route: ActivatedRoute,
    private readonly router: Router,
  ) { }


  ngOnInit(): void {

    const param = Number(this.route.snapshot.paramMap.get('id'));

    if (!isNaN(param)) {
      this.id = param;
    }

    this.loadHotels();
    this.loadUsers();

    if (this.id !== null) {
      this.loadStaff();
      this.loadTasks();
    }
  }

  loadStaff() {
    this.staffService.apiStaffStaffIdGet$Json({ staffId: this.id! }).subscribe({
      next: (response) => {
        this.staffForm.patchValue(response);
      },
      error: (error) => {
        console.log(error)
      }
    });
  }

  loadTasks() {
    this.staffTasks$ = this.staffService.apiStaffStaffIdTasksGet$Json({ staffId: this.id! });
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


  addTask() {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      data: { data: null, isEdit: false, additionalData: this.id } as DialogData<number, number>,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadTasks();
    });

  }


  editTask(taskId: number) {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      data: { data: taskId, isEdit: true, additionalData: this.id } as DialogData<number, number>,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadTasks();
    });

  }

  deleteTask(taskId: number) {
    this.staffService.apiStaffStaffIdTasksTodoTaskIdRemoveDelete({ staffId: this.id!, todoTaskId: taskId }).subscribe({
      next: () => {
        this.toastr.success('Task deleted');
        this.loadTasks();
      },
      error: (error) => {
        this.toastr.error(error.error.title);
      }
    });

  }


  apply() {
    if (this.id !== null) {
      this.updateStaff();
    } else {
      this.createStaff();
    }

  }

  createStaff(): void {
    this.staffService.apiStaffCreatePost({ body: this.staffForm.value })
      .subscribe(() => {
        this.router.navigate(['staff']);
      });
  }

  updateStaff(): void {
    this.staffService.apiStaffStaffIdUpdatePut({ staffId: this.id!, body: this.staffForm.value })
      .subscribe(() => {
        this.router.navigate(['staff']);
      });
  }

}

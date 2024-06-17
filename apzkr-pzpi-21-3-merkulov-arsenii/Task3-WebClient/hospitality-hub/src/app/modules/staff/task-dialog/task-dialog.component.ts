import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StaffService } from 'src/app/api-proxy/services';
import { DialogData } from 'src/app/core/models/dialog-data';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent implements OnInit {

  protected taskForm: FormGroup = this.formBuilder.group({
    description: [''],
    dueDate: [''],
    isCompleted: [''],
    isFinished: [''],
    issuedDate: [''],
    completedDate: [null],
    staffId: [''],
    userFullName: ['']
  });

  constructor(
    public dialogRef: MatDialogRef<TaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData<number, number>,
    private readonly staffService: StaffService,
    private readonly formBuilder: FormBuilder,
  ) {

  }

  ngOnInit(): void {
    if (this.data.isEdit) {
      this.loadData();
    }
  }

  loadData() {
    this.staffService.apiStaffTodoTaskIdGet$Json({ todoTaskId: this.data.data! }).subscribe({
      next: (response) => {
        this.taskForm.patchValue(response);
      },
      error: (error) => {
        console.error(error.error.title);
      }
    });

  }

  apply() {
    this.staffService.apiStaffStaffIdTasksAddPost
      ({
        staffId: this.data.additionalData!,
        body: this.taskForm.value
      }).subscribe({
        next: () => {
          this.dialogRef.close();
        },
        error: (error) => {
          console.error(error.error.title);
        }
      });
  }

  markCompleted() {
    this.staffService.apiStaffStaffIdTasksTodoTaskIdFinishPut(
      {
        staffId: this.data.additionalData!,
        todoTaskId: this.data.data!,
        isCompleted: this.taskForm.value.isCompleted
      }).subscribe({
        next: () => {
          this.dialogRef.close();
        },
        error: (error) => {
          console.error(error.error.title);
        }
      });
  }

}

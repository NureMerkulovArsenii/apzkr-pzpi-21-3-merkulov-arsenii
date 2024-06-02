import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../../../core/models/dialog-data";
import {ToastrService} from "ngx-toastr";
import {AccountService} from "../../../api-proxy/services/account.service";
import {RoleService} from "../../../api-proxy/services/role.service";
import {Observable} from "rxjs";
import {RecordResponseDto} from "../../../api-proxy/models/record-response-dto";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsComponent implements OnInit {

  protected userForm: FormGroup = this.formBuilder.group({
    id: [''],
    email: ['', Validators.required],
    firstName: [''],
    lastName: [''],
    phoneNumber: [''],
    roles: [''],
  });

  protected roles!: RecordResponseDto[];

  constructor(
    private readonly formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<UserDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData<number, null>,
    private readonly roleService: RoleService,
    private readonly accountService: AccountService,
    private readonly toastr: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.loadRoles();
    this.loadData();
  }

  loadData() {
    if (!this.data.isEdit) {
      return;
    }

    this.accountService.apiAccountUsersUserIdGet$Json({userId: this.data.data!})
      .subscribe({
        next: (user) => {
          console.log(user);
          this.userForm.patchValue(user)
        },
        error: (error) => {
          this.toastr.error(error);
        }
      });

  }

  loadRoles() {
    this.roleService.apiRoleRolesGet$Json().subscribe((roles)=>{
      this.roles = roles;
    });
  }

  apply() {
    if (!this.data.isEdit) {
      return;
    }

    this.accountService.apiAccountUsersUserIdPatch({userId: this.data.data!, body: this.userForm.value})
      .subscribe({
        next: () => {
          this.toastr.success('User updated successfully');
        },
        error: (error) => {
          this.toastr.error(error.statusText);
        }
      });

    this.assignRole();

  }

  assignRole() {
    this.roleService.apiRoleAssignRolePost({
      body:
        {
          email: this.userForm.value.email,
          roleName: this.userForm.value.roleName
        }
    }).subscribe({
      next: () => {
        this.toastr.success('User updated successfully');
        this.dialogRef.close();
      },
      error: (error) => {
        this.toastr.error(error.statusText);
      }

    })

  }

}

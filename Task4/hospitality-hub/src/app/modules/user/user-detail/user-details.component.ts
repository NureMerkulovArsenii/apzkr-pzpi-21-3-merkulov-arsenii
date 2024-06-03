import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {AccountService} from "../../../api-proxy/services/account.service";
import {RoleService} from "../../../api-proxy/services/role.service";
import {RecordResponseDto} from "../../../api-proxy/models/record-response-dto";
import {ActivatedRoute} from "@angular/router";
import {RoleSelectComponent} from "../role-select/role-select.component";
import {DialogData} from "../../../core/models/dialog-data";
import {RoleDetailsComponent} from "../role-details/role-details.component";
import {DialogService} from "../../../core/services/dialog.service";

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

  protected roleDisplayedColumns: string[] = ['roleName', 'actions'];

  protected roles!: RecordResponseDto[];
  private id!: number | null;
  protected userRoles!: string[];
  private userEmail!: string;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly dialog: MatDialog,
    private readonly dialogService: DialogService,
    private readonly roleService: RoleService,
    private readonly accountService: AccountService,
    private readonly toastr: ToastrService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    //this.loadRoles();
    this.loadData();
  }

  loadData() {
    this.accountService.apiAccountUsersUserIdGet$Json({userId: this.id!})
      .subscribe({
        next: (user) => {
          console.log(user);
          this.userRoles = user.roles!;
          this.userEmail = user.email!;
          this.userForm.patchValue(user)
        },
        error: (error) => {
          this.toastr.error(error);
        }
      });

  }

  apply() {
    this.accountService.apiAccountUsersUserIdPatch({userId: this.id!, body: this.userForm.value})
      .subscribe({
        next: () => {
          this.toastr.success('User updated successfully');
        },
        error: (error) => {
          this.toastr.error(error.statusText);
        }
      });

    //this.assignRole();
  }



  addRole() {
    const dialogRef = this.dialog.open(RoleSelectComponent, {
      data: {data: this.userEmail, isEdit: false} as DialogData<string, null>,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadData();
    });

  }

  removeRole(roleName: string) {
    this.dialogService.openDialog({
      data: {
        title: "Remove role",
        message: "Are you sure you want to remove this role?",
        okButtonText: "Remove",
        cancelButtonText: "Cancel"
      },
      onClose: (result) => {
        if (result) {
          this.roleService.apiRoleRemoveRolePost({body: {roleName: roleName, email: this.userEmail}})
            .subscribe({
              next: () => {
                this.toastr.success('Role removed successfully');
                this.loadData();
              },
              error: (error) => {
                this.toastr.error(error.statusText);
              }
            })
        }
      }
    });
  }

}


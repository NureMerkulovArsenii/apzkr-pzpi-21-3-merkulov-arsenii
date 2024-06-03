import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {DialogService} from "../../../core/services/dialog.service";
import {ToastrService} from "ngx-toastr";
import {RoomDetailsComponent} from "../../room/room-details/room-details.component";
import {DialogData} from "../../../core/models/dialog-data";
import {RoleService} from "../../../api-proxy/services/role.service";
import {RecordResponseDto} from "../../../api-proxy/models/record-response-dto";
import {UserResponseDto} from "../../../api-proxy/models/user-response-dto";
import {AccountService} from "../../../api-proxy/services/account.service";
import {UserDetailsComponent} from "../user-detail/user-details.component";
import {Router} from "@angular/router";


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$!: Observable<UserResponseDto[]>;

  protected columnsToDisplay: string[] = [
    'email',
    'emailConfirmed',
    'firstName',
    'lastName',
    'phoneNumber',
    'twoFactorEnabled',
    'actions'
  ];
  private roles$!: Observable<Array<RecordResponseDto>>;

  constructor(
    private readonly accountService: AccountService,
    private readonly roleService: RoleService,
    private readonly dialog: MatDialog,
    private readonly dialogService: DialogService,
    private readonly toastr: ToastrService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.loadUsers();
    this.loadRoles();
  }

  loadRoles() {
    this.roles$ = this.roleService.apiRoleRolesGet$Json();
  }

  applyFilter(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.users$ = this.accountService.apiAccountUsersGet$Json();
  }

  editUser(id: number) {
    // const dialogRef = this.dialog.open(UserDetailsComponent, {
    //   data: {data: id, isEdit: true} as DialogData<number, null>,
    // });
    //
    // dialogRef.afterClosed().subscribe(result => {
    //   this.loadUsers();
    // });

    //go to route
    this.router.navigate([`/users/${id}`]);
  }

  deleteUser(id: number) {
    this.dialogService.openDialog({
      data: {
        title: "Delete user",
        message: "Are you sure you want to delete this user?",
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
    this.accountService.apiAccountDeleteUserIdDelete({id})
      .subscribe(() => {
        this.loadUsers();
        this.toastr.success('User deleted successfully');
      });
  }

}

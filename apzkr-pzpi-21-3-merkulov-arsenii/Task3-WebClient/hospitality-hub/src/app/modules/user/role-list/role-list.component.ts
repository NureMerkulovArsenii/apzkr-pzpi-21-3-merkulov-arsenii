import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

import {MatDialog} from "@angular/material/dialog";
import {DialogService} from "../../../core/services/dialog.service";
import {ToastrService} from "ngx-toastr";
import {RoleService} from "../../../api-proxy/services/role.service";
import {RecordResponseDto} from "../../../api-proxy/models/record-response-dto";
import {RoleDetailsComponent} from "../role-details/role-details.component";
import {DialogData} from "../../../core/models/dialog-data";

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {

  roles$!: Observable<RecordResponseDto[]>;

  protected columnsToDisplay: string[] = [
    'id',
    'name',
    'actions'
  ];


  constructor(
    private readonly roleService: RoleService,
    private readonly dialog: MatDialog,
    private readonly dialogService: DialogService,
    private readonly toastr: ToastrService,
  ) {

  }

  ngOnInit(): void {
    this.loadRoles();
  }

  loadRoles(): void {
    this.roles$ = this.roleService.apiRoleRolesGet$Json();
  }

  addRole() {
    const dialogRef = this.dialog.open(RoleDetailsComponent, {
      data: {data: null, isEdit: false} as DialogData<number, null>,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadRoles();
    });
  }

  editRole(id: number) {
    const dialogRef = this.dialog.open(RoleDetailsComponent, {
      data: {data: id, isEdit: true} as DialogData<number, null>,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadRoles();
    });
  }

  deleteRole(roleName: string) {
    this.dialogService.openDialog({
      data: {
        title: "Delete role",
        message: "Are you sure you want to delete this role?",
        okButtonText: "Delete",
        cancelButtonText: "Cancel"
      },
      onClose: (result) => {
        if (result) {
          this.applyDelete(roleName);
        }
      }
    });
  }

  applyDelete(roleName: string) {
    this.roleService.apiRoleDeleteRoleDelete({body: {roleName: roleName}})
      .subscribe(() => {
        this.loadRoles();
        this.toastr.success('Role deleted successfully');
      });
  }

}

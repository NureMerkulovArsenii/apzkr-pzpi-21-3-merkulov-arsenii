import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../../../core/models/dialog-data";
import {RoleService} from "../../../api-proxy/services/role.service";
import {RecordResponseDto} from "../../../api-proxy/models/record-response-dto";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-role-select',
  templateUrl: './role-select.component.html',
  styleUrls: ['./role-select.component.scss']
})
export class RoleSelectComponent implements OnInit {
  protected roles!: Array<RecordResponseDto>;

  protected roleSelected!: string;


  constructor(
    public dialogRef: MatDialogRef<RoleSelectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData<string, null>,
    private roleService: RoleService,
    private readonly toastr: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.loadRoles();
  }

  loadRoles() {
    this.roleService.apiRoleRolesGet$Json().subscribe((roles) => {
      this.roles = roles;
    });
  }

  assignRole() {
    this.roleService.apiRoleAssignRolePost({
      body:
        {
          email: this.data.data,
          roleName: this.roleSelected
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

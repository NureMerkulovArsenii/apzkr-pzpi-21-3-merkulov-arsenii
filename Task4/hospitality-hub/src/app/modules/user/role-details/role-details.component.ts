import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { RecordResponseDto } from "../../../api-proxy/models/record-response-dto";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { DialogData } from "../../../core/models/dialog-data";
import { RoleService } from "../../../api-proxy/services/role.service";
import { ToastrService } from "ngx-toastr";
import { MenuService } from 'src/app/api-proxy/services';
import { MenuNodeResponse } from 'src/app/api-proxy/models';

@Component({
  selector: 'app-role-details',
  templateUrl: './role-details.component.html',
  styleUrls: ['./role-details.component.scss']
})
export class RoleDetailsComponent implements OnInit {

  protected roleForm: FormGroup = this.formBuilder.group({
    id: [''],
    roleName: ['', Validators.required],
  });


  selectedMenuItems: FormControl<number[] | null> = new FormControl<number[]>([]);

  protected menuItems!: MenuNodeResponse[];

  constructor(
    private readonly formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<RoleDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData<number, null>,
    private readonly roleService: RoleService,
    private readonly menuService: MenuService,
    private readonly toastr: ToastrService,
  ) {
  }

  ngOnInit(): void {

    this.loadMenuItems(this.data.data);

    if (this.data.isEdit) {
      this.loadRole();
    }
  }

  loadRole() {
    this.roleService.apiRoleRolesGet$Json()
      .subscribe({
        next: (role: RecordResponseDto[]) => {
          const selectedRole = role.find(r => r.id === this.data.data);
          if (selectedRole != null) {
            this.roleForm.patchValue({
              id: selectedRole.id,
              roleName: selectedRole.name
            });
          }
        },
        error: (error) => {
          this.toastr.error(error);
        }
      });
  }

  loadMenuItems(roleId: number | null) {
    this.menuService.apiMenuMenuNodesRoleIdGet$Json({ roleId: roleId })
      .subscribe({
        next: (menuItems: MenuNodeResponse[]) => {
          this.menuItems = menuItems;
          if (roleId != null) {
            this.selectedMenuItems.setValue(menuItems.filter(x => x.isSelected == true).map(m => m.id!));
          }
          else {
            this.selectedMenuItems.setValue([]);
          }
        },
        error: (error) => {
          this.toastr.error(error);
        }

      });
  }

  apply() {
    if (this.data.isEdit) {
      this.updateRole();
    } else {
      this.createRole();
    }

  }

  updateRole() {
    this.roleService.apiRoleUpdateRoleIdPatch(
      {
        id: this.roleForm.value.id,
        body: { roleName: this.roleForm.value.roleName, menuItems: this.selectedMenuItems.value }
      })
      .subscribe({
        next: () => {
          this.toastr.success('Role updated successfully');
          this.dialogRef.close();
        },
        error: (error) => {
          this.toastr.error(error);
        }
      });

  }

  createRole() {

    this.roleService.apiRoleCreateRolePost({ body: { roleName: this.roleForm.value.roleName, menuItems: this.selectedMenuItems.value } })
      .subscribe({
        next: () => {
          this.toastr.success('Role created successfully');
          this.dialogRef.close();
        },
        error: (error) => {
          this.toastr.error(error);
        }
      });

  }
}

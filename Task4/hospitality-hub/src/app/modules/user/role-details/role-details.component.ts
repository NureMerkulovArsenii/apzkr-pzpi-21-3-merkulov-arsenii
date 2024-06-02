import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RecordResponseDto} from "../../../api-proxy/models/record-response-dto";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../../../core/models/dialog-data";
import {RoleService} from "../../../api-proxy/services/role.service";
import {ToastrService} from "ngx-toastr";

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

  constructor(
    private readonly formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<RoleDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData<number, null>,
    private readonly roleService: RoleService,
    private readonly toastr: ToastrService,
  ) {
  }

  ngOnInit(): void {

  }

  apply() {
    this.roleService.apiRoleCreateRolePost({body: {roleName: this.roleForm.value.roleName}})
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

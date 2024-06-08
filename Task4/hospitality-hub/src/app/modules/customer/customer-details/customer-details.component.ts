import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { DialogData } from "../../../core/models/dialog-data";
import { ToastrService } from "ngx-toastr";
import { CustomerService } from 'src/app/api-proxy/services';
import { FilterCustomerResponse } from 'src/app/api-proxy/models';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})

export class CustomerDetailsComponent implements OnInit {

  protected customerForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phone: ['', Validators.required],
  });

  selectedMenuItems: FormControl<number[] | null> = new FormControl<number[]>([]);

  constructor(
    private readonly formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CustomerDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData<number, null>,
    private readonly customerService: CustomerService,
    private readonly toastr: ToastrService,
  ) {
  }

  ngOnInit(): void {

    if (this.data.isEdit) {
      this.loadData();
    }
  }

  loadData() {
    this.customerService.apiCustomerIdGet$Json({ id: this.data.data! })
      .subscribe({
        next: (customer: FilterCustomerResponse) => {
          this.customerForm.patchValue(customer)
        },
        error: (error) => {
          this.toastr.error(error);
        }
      });
  }

  apply() {
    if (this.data.isEdit) {
      this.updateCustomer();
    } else {
      this.createCustomer();
    }

  }

  updateCustomer() {
    this.customerService.apiCustomerUpdateCustomerIdPatch(
      {
        customerId: this.data.data!,
        body: this.customerForm.value
      })
      .subscribe({
        next: () => {
          this.toastr.success('Customer updated successfully');
          this.dialogRef.close();
        },
        error: (error) => {
          this.toastr.error(error);
        }
      });

  }

  createCustomer() {

    this.customerService.apiCustomerCreatePost({ body: this.customerForm.value })
      .subscribe({
        next: () => {
          this.toastr.success('Customer created successfully');
          this.dialogRef.close();
        },
        error: (error) => {
          this.toastr.error(error.error.title);
        }
      });

  }
}


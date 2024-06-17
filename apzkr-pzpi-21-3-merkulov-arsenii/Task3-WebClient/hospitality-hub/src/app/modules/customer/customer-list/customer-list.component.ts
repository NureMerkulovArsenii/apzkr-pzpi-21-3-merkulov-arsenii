import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

import { MatDialog } from "@angular/material/dialog";
import { DialogService } from "../../../core/services/dialog.service";
import { ToastrService } from "ngx-toastr";
import { CustomerService } from 'src/app/api-proxy/services';
import { FilterCustomerResponse } from 'src/app/api-proxy/models';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { DialogData } from 'src/app/core/models/dialog-data';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})

export class CustomerListComponent implements OnInit {

  customers$!: Observable<FilterCustomerResponse[]>;

  protected columnsToDisplay: string[] = [
    'firstName',
    'lastName',
    'email',
    'phone',
    'actions'
  ];

  constructor(
    private readonly customerService: CustomerService,
    private readonly dialog: MatDialog,
    private readonly dialogService: DialogService,
    private readonly toastr: ToastrService,
  ) {

  }

  ngOnInit(): void {
    this.laodCustomers();
  }

  laodCustomers(): void {
    this.customers$ = this.customerService.apiCustomerFilterGet$Json();
  }

  addCustomer() {
    const dialogRef = this.dialog.open(CustomerDetailsComponent, {
      data: { data: null, isEdit: false } as DialogData<number, null>,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.laodCustomers();
    });
  }

  editCustomer(id: number) {
    const dialogRef = this.dialog.open(CustomerDetailsComponent, {
      data: { data: id, isEdit: true } as DialogData<number, null>,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.laodCustomers();
    });
  }

  deleteCustomer(customerId: number) {
    this.dialogService.openDialog({
      data: {
        title: "Delete customer",
        message: "Are you sure you want to delete this customer?",
        okButtonText: "Delete",
        cancelButtonText: "Cancel"
      },
      onClose: (result) => {
        if (result) {
          this.applyDelete(customerId);
        }
      }
    });
  }

  applyDelete(customerId: number) {
    this.customerService.apiCustomerDeleteCustomerIdDelete({ customerId: customerId })
      .subscribe(() => {
        this.laodCustomers();
        this.toastr.success('Customer deleted successfully');
      });
  }

}


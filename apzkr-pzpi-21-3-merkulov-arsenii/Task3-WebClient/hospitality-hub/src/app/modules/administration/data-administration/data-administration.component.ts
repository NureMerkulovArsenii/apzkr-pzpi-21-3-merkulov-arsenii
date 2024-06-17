import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataAdministrationService } from 'src/app/api-proxy/services';

@Component({
  selector: 'app-data-administration',
  templateUrl: './data-administration.component.html',
  styleUrls: ['./data-administration.component.scss']
})
export class DataAdministrationComponent implements OnInit{

  constructor(
    private readonly dataAdministrationService: DataAdministrationService,
    private readonly toastService: ToastrService
  ) {

  }

  ngOnInit(): void {
    
  }

  createDatabaseBackup() {
    this.dataAdministrationService.apiDataAdministrationBackupDbPost().subscribe({
      next: () => {
        this.toastService.success('Database backup created successfully');
      },
      error: () => {
        this.toastService.error('Database backup creation failed');
      }
    });
  }

}

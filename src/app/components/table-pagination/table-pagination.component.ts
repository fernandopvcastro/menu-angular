import {
  ChangeDetectorRef,
  AfterViewInit,
  Component,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TableService } from '../../services/table-service';
import { UsersData } from '../../services/models';

@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.scss'],
})
export class TablePaginationComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'email', 'phone', 'address', 'born'];
  formData = new MatTableDataSource<UsersData>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private tableService: TableService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    this.tableService.formData$.subscribe((data: UsersData[]) => {
      this.formData.data = data;
      this.cdRef.detectChanges();
      if (this.paginator) {
        this.formData.paginator = this.paginator;
      }
    });
  }
}

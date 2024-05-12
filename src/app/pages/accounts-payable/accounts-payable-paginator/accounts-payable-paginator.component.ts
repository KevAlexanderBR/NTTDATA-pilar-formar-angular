import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-accounts-payable-paginator',
  templateUrl: './accounts-payable-paginator.component.html',
  styleUrl: './accounts-payable-paginator.component.css',
})
export class AccountsPayablePaginatorComponent implements OnInit {
  @Input() totalElements!: number;
  
  @Output() pageChangeEmitter: EventEmitter<{
    pageIndex: number;
    pageSize: number;
  }> = new EventEmitter();

  pageSize: number = 10;
  pageIndex: number = 0;
  pageSizeOptions: Array<number> = [5, 10, 15, 20];

  constructor(private paginatorIntl: MatPaginatorIntl) {}

  ngOnInit(): void {
    this.paginatorIntl.itemsPerPageLabel = 'Itens por página:';
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.pageChangeEmitter.emit({
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
    });
  }
}


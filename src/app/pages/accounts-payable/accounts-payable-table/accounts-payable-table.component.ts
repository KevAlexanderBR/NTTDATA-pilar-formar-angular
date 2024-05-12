import { Component, OnInit } from '@angular/core';
import { AccountPayable } from '../../../interfaces/account-payable';
import { BusinessService } from '../../../shared/service/business.service';

@Component({
  selector: 'app-accounts-payable-table',
  templateUrl: './accounts-payable-table.component.html',
  styleUrl: './accounts-payable-table.component.css',
})
export class AccountsPayableTableComponent implements OnInit {
  listAccounts: AccountPayable[] = [];
  displayedColumns: string[] = [];

  pageSize: number = 10;
  totalElements: number = 0;
  pageIndex: number = 0;

  orderedField: string = 'id';

  constructor(private businessService: BusinessService) {}

  ngOnInit(): void {
    this.businessService.getListAccountsSubject().subscribe(() => {
      this.loadAccountsPayable();
    })
  }

  loadAccountsPayable(): void {
    this.businessService
      .getAccountsPayablePageable(
        this.pageIndex + 1,
        this.orderedField,
        this.pageSize
      )
      .subscribe((response) => {
        this.listAccounts = response.data;
        this.displayedColumns = Object.keys(this.listAccounts[0]);
        this.totalElements = response.items;
      });
  }

  onPageChange(event: { pageIndex: number; pageSize: number }): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadAccountsPayable();
  }

  onSelectChange(field: string): void {
    this.orderedField = field;
    this.loadAccountsPayable();
  }
}

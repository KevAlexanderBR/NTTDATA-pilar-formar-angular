import { Component } from '@angular/core';

@Component({
  selector: 'app-accounts-payable',
  templateUrl: './accounts-payable.component.html',
  styleUrls: ['./accounts-payable.component.css'],
})
export class AccountsPayableComponent {
  tabSelected: number = 0;
  title: string = 'Contas a Pagar';

  constructor() {}

  changeTab(tab: number): void {
    this.tabSelected = tab;
  }
}

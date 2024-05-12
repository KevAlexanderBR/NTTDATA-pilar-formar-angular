import { AccountPayable } from './../../interfaces/account-payable';
import { BusinessService } from './../../shared/service/business.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-accounts-payable',
  templateUrl: './accounts-payable.component.html',
  styleUrls: ['./accounts-payable.component.css'],
})
export class AccountsPayableComponent implements OnInit {
  @ViewChild(FormGroupDirective) formGroupDirective!: FormGroupDirective;
  accountForm!: FormGroup;
  listAccounts = new BehaviorSubject<AccountPayable[]>([]);
  displayedColumns: string[] = [];
  pageSize = 10;
  totalElements = 0;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 15, 20]
  tabSelected = 0;

  orderedFields: any[] = [
    {value: 'id', viewValue: 'ID Crescente'},
    {value: '-id', viewValue: 'ID Decrescente'},
    {value: 'title', viewValue: 'Descrição Crescente'},
    {value: '-title', viewValue: 'Descrição Decrescente'},
    {value: 'company', viewValue: 'Empresa Crescente'},
    {value: '-company', viewValue: 'Empresa Decrescente'},
    {value: 'date', viewValue: 'Data de Vencimento Crescente'},
    {value: '-date', viewValue: 'Data de Vencimento Decrescente'},
    {value: 'value', viewValue: 'Valor Crescente'},
    {value: '-value', viewValue: 'Valor Decrescente'}
  ];

  orderedField: string = this.orderedFields[0].value;

  constructor(
    private formBuilder: FormBuilder,
    private businessService: BusinessService,
    private paginatorIntl: MatPaginatorIntl
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.loadAccountsPayable();
    this.paginatorIntl.itemsPerPageLabel = 'Itens por página:';
    this.paginatorIntl.getRangeLabel(this.pageIndex, this.pageSize, this.totalElements);
  }

  createForm(): void {
    this.accountForm = this.formBuilder.group({
      description: ['', Validators.required],
      value: ['', Validators.required],
      enterprise: ['', Validators.required],
      dueDate: ['', Validators.required],
    });
  }

  loadAccountsPayable(): void {
    this.businessService.getAccountsPayablePageable(this.pageIndex + 1, this.orderedField, this.pageSize).subscribe((response) => {
      this.listAccounts.next(response.data);
      this.displayedColumns = Object.keys(this.listAccounts.value[0]);
      this.totalElements = response.items;
    });
  }

  submitForm(): void {
    const inputDescription = this.accountForm.get('description')?.value;
    const inputValue = this.accountForm.get('value')?.value;
    const inputEnterprise = this.accountForm.get('enterprise')?.value;
    const inputDueDate = this.accountForm.get('dueDate')?.value;

    const accountPayable = this.createAccountPayable(
      inputDescription,
      inputValue,
      inputEnterprise,
      inputDueDate
    );

    this.businessService.saveAccountsPayable(accountPayable).subscribe(() => {
      this.loadAccountsPayable();
      alert('Cadastrado com sucesso!');
      this.formGroupDirective.resetForm();
      this.tabSelected = 1;
    });
  }

  createAccountPayable(
    inputDescription: string,
    inputValue: number,
    inputEnterprise: string,
    inputDueDate: Date
  ): AccountPayable {
    const value = inputValue.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL',}).replace(/\u00a0/g, ' ');
    const date = inputDueDate.toLocaleDateString('pt-BR', {day: '2-digit',month: '2-digit',year: 'numeric',
    });
    return {
      id: (this.totalElements + 1).toString(),
      title: inputDescription,
      company: inputEnterprise,
      date: date,
      value: value,
    };
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadAccountsPayable();
  }

  onSelectChange() {
    this.loadAccountsPayable();
  }
}

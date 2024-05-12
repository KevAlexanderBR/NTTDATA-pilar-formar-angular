import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  FormGroupDirective,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { AccountPayable } from '../../../interfaces/account-payable';
import { BusinessService } from '../../../shared/service/business.service';

@Component({
  selector: 'app-accounts-payable-form',
  templateUrl: './accounts-payable-form.component.html',
  styleUrl: './accounts-payable-form.component.css',
})
export class AccountsPayableFormComponent implements OnInit {
  @ViewChild(FormGroupDirective) formGroupDirective!: FormGroupDirective;
  @Output() tabSelectedEmitter = new EventEmitter<number>();
  accountForm!: FormGroup;
  totalElements: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private businessService: BusinessService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.businessService.getListAccountsSubject().subscribe((list) => (
      this.totalElements = list.length
    ));
  }

  createForm(): void {
    this.accountForm = this.formBuilder.group({
      description: ['', Validators.required],
      value: ['', Validators.required],
      enterprise: ['', Validators.required],
      dueDate: ['', Validators.required],
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
      this.businessService.updateAccountsPayableSubject(accountPayable);
      alert('Cadastrado com sucesso!');
      this.formGroupDirective.resetForm();
      this.tabSelectedEmitter.emit(1);
    });
  }

  createAccountPayable(
    inputDescription: string,
    inputValue: number,
    inputEnterprise: string,
    inputDueDate: Date
  ): AccountPayable {
    const value = inputValue
      .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
      .replace(/\u00a0/g, ' ');
    const date = inputDueDate.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    return {
      id: (this.totalElements + 1).toString(),
      title: inputDescription,
      company: inputEnterprise,
      date: date,
      value: value,
    };
  }
}

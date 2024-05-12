import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-accounts-payable-ordination',
  templateUrl: './accounts-payable-ordination.component.html',
  styleUrl: './accounts-payable-ordination.component.css'
})
export class AccountsPayableOrdinationComponent {

  @Output() orderedFieldEmitter: EventEmitter<string> = new EventEmitter();

  orderedFields: any[] = [
    { value: 'id', viewValue: 'ID Crescente' },
    { value: '-id', viewValue: 'ID Decrescente' },
    { value: 'title', viewValue: 'Descrição Crescente' },
    { value: '-title', viewValue: 'Descrição Decrescente' },
  ];

  orderedField: string = this.orderedFields[0].value;

  onSelectChange(field: string): void {
    this.orderedField = field;
    this.orderedFieldEmitter.emit(field);
  }

}

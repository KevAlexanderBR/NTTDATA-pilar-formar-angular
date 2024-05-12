import { AccountPayable } from './../../interfaces/account-payable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { AccountPayablePageable } from '../../interfaces/account-payable-pageable';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  
  private listAccountsSubject = new BehaviorSubject<AccountPayable[]>([]);

  private urlApi = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) { }

  //  CHAMADA PARA PEGAR AS CONTAS A PAGAR
  getAccountsPayable(): Observable<AccountPayable[]>  {
    return this.httpClient.get<AccountPayable[]>(this.urlApi + 'contas-pagar');
  }

  //  CHAMADA PARA PEGAR AS CONTAS A PAGAR PAGINADAS
  getAccountsPayablePageable(pageIndex?: number, orderedField?: string, pageSize?: number): Observable<AccountPayablePageable>  {
    const params = new HttpParams()
      .set('_page', pageIndex || 1)
      .set('_per_page', pageSize || 10)
      .set('_sort', orderedField || 'id');
    return this.httpClient.get<AccountPayablePageable>(this.urlApi + 'contas-pagar', { params });
  }

  //  CHAMADA PARA GRAVAR AS CONTAS A PAGAR
  saveAccountsPayable(accountPayable: AccountPayable): Observable<AccountPayable> {
    return this.httpClient.post<AccountPayable>(this.urlApi + 'contas-pagar', accountPayable);
  }

  //  CHAMADA PARA PEGAR AS CONTAS A RECEBER
  getAccountsReceivable() {
    return this.httpClient.get(this.urlApi + 'contas-receber');
  }

  //  CHAMADA PARA PEGAR AS PESSOAS
  getPeople() {
    return this.httpClient.get(this.urlApi + 'pessoas');
  }

  updateAccountsPayableSubject(accountPayable: AccountPayable): void {
    this.listAccountsSubject.next([...this.listAccountsSubject.value, accountPayable]);
  }

  getListAccountsSubject(): BehaviorSubject<AccountPayable[]> {
    return this.listAccountsSubject;
  }
}

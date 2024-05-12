import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsPayableTableComponent } from './accounts-payable-table.component';

describe('AccountsPayableTableComponent', () => {
  let component: AccountsPayableTableComponent;
  let fixture: ComponentFixture<AccountsPayableTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountsPayableTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountsPayableTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

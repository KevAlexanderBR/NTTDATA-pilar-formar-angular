import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsPayableOrdinationComponent } from './accounts-payable-ordination.component';

describe('AccountsPayableOrdinationComponent', () => {
  let component: AccountsPayableOrdinationComponent;
  let fixture: ComponentFixture<AccountsPayableOrdinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountsPayableOrdinationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountsPayableOrdinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

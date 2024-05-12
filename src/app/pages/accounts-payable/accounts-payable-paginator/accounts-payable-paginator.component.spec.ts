import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsPayablePaginatorComponent } from './accounts-payable-paginator.component';

describe('AccountsPayablePaginatorComponent', () => {
  let component: AccountsPayablePaginatorComponent;
  let fixture: ComponentFixture<AccountsPayablePaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountsPayablePaginatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountsPayablePaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

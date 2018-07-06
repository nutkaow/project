import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageItemBankComponent } from './manage-item-bank.component';

describe('ManageItemBankComponent', () => {
  let component: ManageItemBankComponent;
  let fixture: ComponentFixture<ManageItemBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageItemBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageItemBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

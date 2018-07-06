import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintExamComponent } from './print-exam.component';

describe('PrintExamComponent', () => {
  let component: PrintExamComponent;
  let fixture: ComponentFixture<PrintExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

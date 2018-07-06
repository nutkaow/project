import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLoginFormComponent } from './header-login-form.component';

describe('HeaderLoginFormComponent', () => {
  let component: HeaderLoginFormComponent;
  let fixture: ComponentFixture<HeaderLoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderLoginFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EJalaliDatePickerComponent } from './e-jalali-date-picker.component';

describe('EJalaliDatePickerComponent', () => {
  let component: EJalaliDatePickerComponent;
  let fixture: ComponentFixture<EJalaliDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EJalaliDatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EJalaliDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

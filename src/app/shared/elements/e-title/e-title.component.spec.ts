import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ETitleComponent } from './e-title.component';

describe('ETitleComponent', () => {
  let component: ETitleComponent;
  let fixture: ComponentFixture<ETitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ETitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ETitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

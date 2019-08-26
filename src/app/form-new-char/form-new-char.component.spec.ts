import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewCharComponent } from './form-new-char.component';

describe('FormNewCharComponent', () => {
  let component: FormNewCharComponent;
  let fixture: ComponentFixture<FormNewCharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNewCharComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNewCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

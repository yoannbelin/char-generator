import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPersosComponent } from './list-persos.component';

describe('ListPersosComponent', () => {
  let component: ListPersosComponent;
  let fixture: ComponentFixture<ListPersosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPersosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPersosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRacesComponent } from './list-races.component';

describe('ListRacesComponent', () => {
  let component: ListRacesComponent;
  let fixture: ComponentFixture<ListRacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

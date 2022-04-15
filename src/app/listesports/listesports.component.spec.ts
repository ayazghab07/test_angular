import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesportsComponent } from './listesports.component';

describe('ListesportsComponent', () => {
  let component: ListesportsComponent;
  let fixture: ComponentFixture<ListesportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListesportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

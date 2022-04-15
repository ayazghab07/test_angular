import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierSportComponent } from './modifier-sport.component';

describe('ModifierSportComponent', () => {
  let component: ModifierSportComponent;
  let fixture: ComponentFixture<ModifierSportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierSportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

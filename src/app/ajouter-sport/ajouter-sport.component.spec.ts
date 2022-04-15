import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterSportComponent } from './ajouter-sport.component';

describe('AjouterSportComponent', () => {
  let component: AjouterSportComponent;
  let fixture: ComponentFixture<AjouterSportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterSportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterMatchComponent } from './ajouter-match.component';

describe('AjouterMatchComponent', () => {
  let component: AjouterMatchComponent;
  let fixture: ComponentFixture<AjouterMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterMatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

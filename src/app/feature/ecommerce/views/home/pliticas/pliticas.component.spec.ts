import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PliticasComponent } from './pliticas.component';

describe('PliticasComponent', () => {
  let component: PliticasComponent;
  let fixture: ComponentFixture<PliticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PliticasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PliticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

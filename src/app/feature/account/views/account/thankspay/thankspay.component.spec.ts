import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankspayComponent } from './thankspay.component';

describe('ThankspayComponent', () => {
  let component: ThankspayComponent;
  let fixture: ComponentFixture<ThankspayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThankspayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThankspayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

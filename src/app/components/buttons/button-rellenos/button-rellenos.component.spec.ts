import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRellenosComponent } from './button-rellenos.component';

describe('ButtonRellenosComponent', () => {
  let component: ButtonRellenosComponent;
  let fixture: ComponentFixture<ButtonRellenosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonRellenosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonRellenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

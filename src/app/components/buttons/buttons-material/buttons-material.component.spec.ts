import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsMaterialComponent } from './buttons-material.component';

describe('ButtonsMaterialComponent', () => {
  let component: ButtonsMaterialComponent;
  let fixture: ComponentFixture<ButtonsMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonsMaterialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonsMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateAddressComponent } from './form-create-address.component';

describe('FormCreateAddressComponent', () => {
  let component: FormCreateAddressComponent;
  let fixture: ComponentFixture<FormCreateAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormCreateAddressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCreateAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

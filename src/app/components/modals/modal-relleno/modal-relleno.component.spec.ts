import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRellenoComponent } from './modal-relleno.component';

describe('ModalRellenoComponent', () => {
  let component: ModalRellenoComponent;
  let fixture: ComponentFixture<ModalRellenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalRellenoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalRellenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

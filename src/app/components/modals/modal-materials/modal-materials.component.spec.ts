import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMaterialsComponent } from './modal-materials.component';

describe('ModalMaterialsComponent', () => {
  let component: ModalMaterialsComponent;
  let fixture: ComponentFixture<ModalMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalMaterialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

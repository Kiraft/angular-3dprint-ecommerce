import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCodeQuoteComponent } from './modal-code-quote.component';

describe('ModalCodeQuoteComponent', () => {
  let component: ModalCodeQuoteComponent;
  let fixture: ComponentFixture<ModalCodeQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalCodeQuoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalCodeQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

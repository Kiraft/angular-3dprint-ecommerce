import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsQuoteComponent } from './options-quote.component';

describe('OptionsQuoteComponent', () => {
  let component: OptionsQuoteComponent;
  let fixture: ComponentFixture<OptionsQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OptionsQuoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptionsQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

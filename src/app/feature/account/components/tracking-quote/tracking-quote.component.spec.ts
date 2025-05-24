import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingQuoteComponent } from './tracking-quote.component';

describe('TrackingQuoteComponent', () => {
  let component: TrackingQuoteComponent;
  let fixture: ComponentFixture<TrackingQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrackingQuoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrackingQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

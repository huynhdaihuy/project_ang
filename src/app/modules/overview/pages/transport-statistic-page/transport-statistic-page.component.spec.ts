import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportStatisticPageComponent } from './transport-statistic-page.component';

describe('TransportStatisticPageComponent', () => {
  let component: TransportStatisticPageComponent;
  let fixture: ComponentFixture<TransportStatisticPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportStatisticPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransportStatisticPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

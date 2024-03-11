import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSaleChartComponent } from './best-sale-chart.component';

describe('BestSaleChartComponent', () => {
  let component: BestSaleChartComponent;
  let fixture: ComponentFixture<BestSaleChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestSaleChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestSaleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderStatisticPageComponent } from './order-statistic-page.component';

describe('OrderStatisticPageComponent', () => {
  let component: OrderStatisticPageComponent;
  let fixture: ComponentFixture<OrderStatisticPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderStatisticPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderStatisticPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

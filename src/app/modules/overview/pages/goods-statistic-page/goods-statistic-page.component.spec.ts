import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsStatisticPageComponent } from './goods-statistic-page.component';

describe('GoodsStatisticPageComponent', () => {
  let component: GoodsStatisticPageComponent;
  let fixture: ComponentFixture<GoodsStatisticPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodsStatisticPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodsStatisticPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

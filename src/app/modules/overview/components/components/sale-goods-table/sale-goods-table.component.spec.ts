import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleGoodsTableComponent } from './sale-goods-table.component';

describe('SaleGoodsTableComponent', () => {
  let component: SaleGoodsTableComponent;
  let fixture: ComponentFixture<SaleGoodsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleGoodsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleGoodsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

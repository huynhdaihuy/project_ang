import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseStatisticTableComponent } from './warehouse-statistic-table.component';

describe('WarehouseStatisticTableComponent', () => {
  let component: WarehouseStatisticTableComponent;
  let fixture: ComponentFixture<WarehouseStatisticTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouseStatisticTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarehouseStatisticTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

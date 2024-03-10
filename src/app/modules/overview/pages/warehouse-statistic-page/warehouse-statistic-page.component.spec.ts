import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseStatisticPageComponent } from './warehouse-statistic-page.component';

describe('WarehouseStatisticPageComponent', () => {
  let component: WarehouseStatisticPageComponent;
  let fixture: ComponentFixture<WarehouseStatisticPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouseStatisticPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarehouseStatisticPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

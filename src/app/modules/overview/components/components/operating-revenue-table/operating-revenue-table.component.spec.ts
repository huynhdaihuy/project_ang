import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatingRevenueTableComponent } from './operating-revenue-table.component';

describe('OperatingRevenueTableComponent', () => {
  let component: OperatingRevenueTableComponent;
  let fixture: ComponentFixture<OperatingRevenueTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatingRevenueTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatingRevenueTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

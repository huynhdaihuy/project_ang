import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatingCostTableComponent } from './operating-cost-table.component';

describe('OperatingCostTableComponent', () => {
  let component: OperatingCostTableComponent;
  let fixture: ComponentFixture<OperatingCostTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatingCostTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatingCostTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

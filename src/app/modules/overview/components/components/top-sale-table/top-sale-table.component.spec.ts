import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSaleTableComponent } from './top-sale-table.component';

describe('TopSaleTableComponent', () => {
  let component: TopSaleTableComponent;
  let fixture: ComponentFixture<TopSaleTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopSaleTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopSaleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

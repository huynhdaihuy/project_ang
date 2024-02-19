import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeGoodsPageComponent } from './mange-goods-page.component';

describe('MangeGoodsPageComponent', () => {
  let component: MangeGoodsPageComponent;
  let fixture: ComponentFixture<MangeGoodsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangeGoodsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MangeGoodsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

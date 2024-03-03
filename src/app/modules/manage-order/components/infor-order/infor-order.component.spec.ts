import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InforOrderComponent } from './infor-order.component';

describe('InforOrderComponent', () => {
  let component: InforOrderComponent;
  let fixture: ComponentFixture<InforOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InforOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InforOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InforOverviewComponent } from './infor-overview.component';

describe('InforOverviewComponent', () => {
  let component: InforOverviewComponent;
  let fixture: ComponentFixture<InforOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InforOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InforOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

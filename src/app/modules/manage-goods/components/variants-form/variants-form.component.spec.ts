import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariantsFormComponent } from './variants-form.component';

describe('VariantsFormComponent', () => {
  let component: VariantsFormComponent;
  let fixture: ComponentFixture<VariantsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariantsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariantsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

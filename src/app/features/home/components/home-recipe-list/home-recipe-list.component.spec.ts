import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRecipeListComponent } from './home-recipe-list.component';

describe('HomeRecipeListComponent', () => {
  let component: HomeRecipeListComponent;
  let fixture: ComponentFixture<HomeRecipeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRecipeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeRecipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

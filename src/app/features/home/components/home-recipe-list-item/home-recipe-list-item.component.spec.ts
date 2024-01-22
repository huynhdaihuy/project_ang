import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRecipeListItemComponent } from './home-recipe-list-item.component';

describe('HomeRecipeListItemComponent', () => {
  let component: HomeRecipeListItemComponent;
  let fixture: ComponentFixture<HomeRecipeListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRecipeListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeRecipeListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

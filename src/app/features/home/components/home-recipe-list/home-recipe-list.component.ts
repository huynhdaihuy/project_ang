import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-recipe-list',
  templateUrl: './home-recipe-list.component.html',
  styleUrls: ['./home-recipe-list.component.css']
})
export class HomeRecipeListComponent implements OnInit {
  loop=[1,2,3,4,5]
  constructor() { }

  ngOnInit(): void {
  }

}

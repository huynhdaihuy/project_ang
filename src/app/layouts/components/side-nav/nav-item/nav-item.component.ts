import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css'],
})
export class NavItemComponent implements OnInit {
  @Input() data: any;

  constructor() {}

  ngOnInit(): void {
  }
}

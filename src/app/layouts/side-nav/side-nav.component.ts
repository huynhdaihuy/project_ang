import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  navItems: any[] = [
    {
      title: 'Overview',
      icon: 'fa-solid fa-shield-halved',
      url: 'overview',
    },
    {
      title: 'Goods Management',
      icon: 'fa-solid fa-box-open',
      url: 'goods',
    },
    {
      title: 'Warehouse Management',
      icon: 'fa-solid fa-warehouse',
      url: 'warehouse',
    },
    {
      title: 'Order Management',
      icon: 'fa-regular fa-file',
      url:'order'
    },
    {
      title: 'Transport Management',
      icon: 'fa-solid fa-truck',
    },
    {
      title: 'Monitoring',
      icon: 'fa-solid fa-tv',
    },
    {
      title: 'Generate Reports',
      icon: 'fa-regular fa-clipboard',
    },
  ];
  activeNavItem: number = -1;

  constructor() {}

  ngOnInit(): void {}
}

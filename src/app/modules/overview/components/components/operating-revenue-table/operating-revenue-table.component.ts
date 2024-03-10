import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operating-revenue-table',
  templateUrl: './operating-revenue-table.component.html',
  styleUrls: ['./operating-revenue-table.component.css'],
})
export class OperatingRevenueTableComponent implements OnInit {
  revenueHeader: {
    title: string;
    valueDay: number;
    valueWeek: number;
    valueMonth: number;
    valueQuarter: number;
    valueYear: number;
  }[] = [
    {
      title: 'Total Revenue',
      valueDay: 25000,
      valueWeek: 175000,
      valueMonth: 750000,
      valueQuarter: 2000000,
      valueYear: 8000000,
    },
    {
      title: 'Product Sales Revenue',
      valueDay: 20000,
      valueWeek: 140000,
      valueMonth: 600000,
      valueQuarter: 1600000,
      valueYear: 6400000,
    },
    {
      title: 'Order Revenue',
      valueDay: 1500,
      valueWeek: 10500,
      valueMonth: 45000,
      valueQuarter: 120000,
      valueYear: 480000,
    },
    {
      title: 'Shipping Revenue (Customer)',
      valueDay: 2000,
      valueWeek: 14000,
      valueMonth: 60000,
      valueQuarter: 160000,
      valueYear: 640000,
    },
    {
      title: 'Fulfillment Revenue',
      valueDay: 3000,
      valueWeek: 21000,
      valueMonth: 90000,
      valueQuarter: 240000,
      valueYear: 960000,
    },
    {
      title: 'Transportation Revenue ',
      valueDay: 1500,
      valueWeek: 10500,
      valueMonth: 45000,
      valueQuarter: 120000,
      valueYear: 480000,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

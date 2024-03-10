import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operating-cost-table',
  templateUrl: './operating-cost-table.component.html',
  styleUrls: ['./operating-cost-table.component.css'],
})
export class OperatingCostTableComponent implements OnInit {
  labelHeader: {
    label: string;
    data: any[];
  }[] = [
    {
      label: 'Goods',
      data: [
        {
          title: 'Cost of Goods Sold',
          valueDay: 150,
          valueWeek: 1050,
          valueMonth: 4500,
          valueQuarter: 14000,
          valueYear: 60000,
        },
        {
          title: 'Inventory Holding Costs',
          valueDay: 55,
          valueWeek: 385,
          valueMonth: 1650,
          valueQuarter: 5200,
          valueYear: 22000,
        },
        {
          title: 'Procurement Costs',
          valueDay: 92,
          valueWeek: 644,
          valueMonth: 2760,
          valueQuarter: 9200,
          valueYear: 40000,
        },
        {
          title: 'Quality Control Costs',
          valueDay: 28,
          valueWeek: 196,
          valueMonth: 840,
          valueQuarter: 2800,
          valueYear: 12000,
        },
      ],
    },
    {
      label: 'Order',
      data: [
        {
          title: 'Order Processing Costs',
          valueDay: 85,
          valueWeek: 595,
          valueMonth: 2550,
          valueQuarter: 8500,
          valueYear: 36000,
        },
        {
          title: 'Fulfillment Costs',
          valueDay: 120,
          valueWeek: 840,
          valueMonth: 3600,
          valueQuarter: 12000,
          valueYear: 48000,
        },
        {
          title: 'Returns and Refunds Cost',
          valueDay: 32,
          valueWeek: 224,
          valueMonth: 960,
          valueQuarter: 3200,
          valueYear: 15000,
        },
      ],
    },
    {
      label: 'Warehouse',
      data: [
        {
          title: 'Warehouse Rent',
          valueDay: 70,
          valueWeek: 490,
          valueMonth: 2100,
          valueQuarter: 7000,
          valueYear: 28000,
        },
        {
          title: 'Labor Costs',
          valueDay: 98,
          valueWeek: 686,
          valueMonth: 2940,
          valueQuarter: 9800,
          valueYear: 40000,
        },
        {
          title: 'Equipment Costs',
          valueDay: 35,
          valueWeek: 245,
          valueMonth: 1050,
          valueQuarter: 3500,
          valueYear: 15000,
        },
        {
          title: 'Maintenance Cost',
          valueDay: 12,
          valueWeek: 84,
          valueMonth: 360,
          valueQuarter: 1200,
          valueYear: 5000,
        },
        {
          title: 'Freight Costs',
          valueDay: 105,
          valueWeek: 735,
          valueMonth: 3150,
          valueQuarter: 10500,
          valueYear: 45000,
        },
      ],
    },
    {
      label: 'Transportation',
      data: [
        {
          title: 'Vehicle Maintenance',
          valueDay: 20,
          valueWeek: 140,
          valueMonth: 600,
          valueQuarter: 2000,
          valueYear: 8000,
        },
        {
          title: 'Driver Salaries',
          valueDay: 65,
          valueWeek: 455,
          valueMonth: 1950,
          valueQuarter: 6500,
          valueYear: 28000,
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

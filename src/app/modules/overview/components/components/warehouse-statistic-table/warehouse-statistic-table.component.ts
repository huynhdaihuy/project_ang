import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warehouse-statistic-table',
  templateUrl: './warehouse-statistic-table.component.html',
  styleUrls: ['./warehouse-statistic-table.component.css'],
})
export class WarehouseStatisticTableComponent implements OnInit {
  dataWarehouse: {
    status: string;
    warehouse: string;
    orderId: string;
    date: string;
  }[] = [
    {
      status: 'Picked',
      warehouse: 'Warehouse A',
      orderId: 'OD001',
      date: '2024-03-08',
    },
    {
      status: 'Packed',
      warehouse: 'Warehouse B',
      orderId: 'OD002',
      date: '2024-03-08',
    },
    {
      status: 'Delivered',
      warehouse: 'Warehouse C',
      orderId: 'OD003',
      date: '2024-03-08',
    },
    {
      status: 'Picked',
      warehouse: 'Warehouse A',
      orderId: 'OD004',
      date: '2024-03-09',
    },
    {
      status: 'Packed',
      warehouse: 'Warehouse B',
      orderId: 'OD005',
      date: '2024-03-09',
    },
    {
      status: 'Delivered',
      warehouse: 'Warehouse C',
      orderId: 'OD006',
      date: '2024-03-09',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

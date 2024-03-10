import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transport-statistic-page',
  templateUrl: './transport-statistic-page.component.html',
  styleUrls: ['./transport-statistic-page.component.css'],
})
export class TransportStatisticPageComponent implements OnInit {
  dataTransport: {
    status: string;
    method: string;
    region: string;
    value: number;
    carrier: string;
  }[] = [
    {
      status: 'At Origin',
      method: 'Truck',
      region: 'Can Tho',
      value: 5000,
      carrier: 'WHB',
    },
    {
      status: 'In Transit',
      method: 'Air',
      region: 'HCM City',
      value: 8000,
      carrier: 'UHP',
    },
    {
      status: 'Received',
      method: 'Ocean',
      region: 'An Giang',
      value: 6500,
      carrier: 'HIA',
    },
    {
      status: 'At Origin',
      method: 'Truck',
      region: 'Vinh Long',
      value: 7200,
      carrier: 'POA',
    },
    {
      status: 'In Transit',
      method: 'Air',
      region: 'HCM City',
      value: 9200,
      carrier: 'AOP',
    },
    {
      status: 'Received',
      method: 'Ocean',
      region: 'Can Tho',
      value: 5500,
      carrier: 'WHB',
    },
    {
      status: 'In Transit',
      method: 'Truck',
      region: 'HCM City',
      value: 7800,
      carrier: 'HIA',
    },
    {
      status: 'Received',
      method: 'Air',
      region: 'An Giang',
      value: 6100,
      carrier: 'UHP',
    },
    {
      status: 'At Origin',
      method: 'Ocean',
      region: 'Vinh Long',
      value: 4800,
      carrier: 'POA',
    },
    {
      status: 'In Transit',
      method: 'Truck',
      region: 'Can Tho',
      value: 6700,
      carrier: 'AOP',
    },
    {
      status: 'Received',
      method: 'Air',
      region: 'HCM City',
      value: 7500,
      carrier: 'WHB',
    },
    {
      status: 'At Origin',
      method: 'Truck',
      region: 'Vinh Long',
      value: 7100,
      carrier: 'HIA',
    },
    {
      status: 'In Transit',
      method: 'Ocean',
      region: 'An Giang',
      value: 8300,
      carrier: 'UHP',
    },
    {
      status: 'Received',
      method: 'Truck',
      region: 'Can Tho',
      value: 5900,
      carrier: 'POA',
    },
    {
      status: 'At Origin',
      method: 'Air',
      region: 'HCM City',
      value: 6700,
      carrier: 'AOP',
    },
    {
      status: 'In Transit',
      method: 'Ocean',
      region: 'Vinh Long',
      value: 7400,
      carrier: 'WHB',
    },
    {
      status: 'Received',
      method: 'Truck',
      region: 'An Giang',
      value: 6000,
      carrier: 'HIA',
    },
    {
      status: 'At Origin',
      method: 'Air',
      region: 'Can Tho',
      value: 8100,
      carrier: 'UHP',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

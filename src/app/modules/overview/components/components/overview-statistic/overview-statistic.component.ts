import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-statistic',
  templateUrl: './overview-statistic.component.html',
  styleUrls: ['./overview-statistic.component.css'],
})
export class OverviewStatisticComponent implements OnInit {
  data: { title: string; value: number }[] = [
    {
      title: 'No Of Sale',
      value: 151,
    },
    {
      title: 'Revenue',
      value: 5661166,
    },
    {
      title: 'Cost',
      value: 515200,
    },
    {
      title: 'Profit',
      value: 4652135,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

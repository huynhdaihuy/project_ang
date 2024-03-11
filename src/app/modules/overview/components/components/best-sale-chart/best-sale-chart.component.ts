import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-best-sale-chart',
  templateUrl: './best-sale-chart.component.html',
  styleUrls: ['./best-sale-chart.component.css'],
})
export class BestSaleChartComponent implements OnInit {
  chart: any;
  top5GoodsData = [110000, 144000, 100000, 90000, 80000];
  top5GoodsLabels = [
    'Product N',
    'Product O',
    'Product P',
    'Product R',
    'Product M',
  ];
  constructor() {}

  ngOnInit(): void {
    this.chart = new Chart('bestSaleChart', {
      type: 'pie',
      data: {
        labels: [
          'Product N',
          'Product O',
          'Product P',
          'Product R',
          'Product M',
        ],
        datasets: [
          {
            label: 'Sales Performance',
            data: [110000, 144000, 100000, 90000, 80000],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        animation: {
          animateScale: true,
          animateRotate: true,
        },
      },
    });
  }
}

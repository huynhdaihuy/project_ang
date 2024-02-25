import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  constructor() {}

  chartdata: any;

  labeldata: any[] = ['Under stock', 'Over stock', 'In stock'];
  realdata: any[] = [56, 7, 500];
  colordata: any[] = [
    'rgb(255,105,97)',
    'rgb(255,179,71)',
    'rgb(193, 225, 193)',
  ];

  labelLine: any[] = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Satur', 'Sun'];

  dataLine: any[] = [
    {
      label: 'Outbounded Stock',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: true,
      borderColor: 'rgb(255,105,97)',
      tension: 0,
    },
    {
      label: 'Inbounded Stock',
      data: [20, 120, 50, 300, 45, 20, 0],
      fill: true,
      borderColor: 'rgb(193, 225, 193)',
      tension: 0,
    },
    {
      label: 'Total',
      data: [85, 179, 130, 381, 111, 75, 40],
      fill: true,
      borderColor: 'rgb(193, 225, 193)',
      tension: 0,
    },
  ];

  ngOnInit(): void {
    this.RenderChart(
      this.labeldata,
      this.realdata,
      'doughnut',
      'dochart',
      this.colordata
    );
    this.RenderLineChart(this.labelLine, this.dataLine, 'line', 'linechart');
  }

  RenderChart(
    labeldata: any,
    maindata: any,
    type: any,
    id: any,
    colordata?: any
  ) {
    const myChart = new Chart(id, {
      type: type,
      data: {
        labels: labeldata,
        datasets: [
          {
            label: 'Items',
            data: maindata,
            backgroundColor: colordata,
            borderColor: ['rgba(255, 99, 132, 1)'],
            borderWidth: 0,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: 'bottom',
            align: 'center',
            labels: {
              usePointStyle: true,
              pointStyle: 'circle',
              padding: 40,
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
  RenderLineChart(labeldata: any, maindata: any, type: any, id: any) {
    const myChart = new Chart(id, {
      type: type,
      data: {
        labels: this.labelLine,
        datasets: this.dataLine,
      },
      options: {
        plugins: {
          legend: {
            position: 'bottom',
            align: 'center',
            labels: {
              usePointStyle: true,
              pointStyle: 'circle',
              padding: 40,
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 40,
            },
          },
        },
      },
    });
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-top-sale-table',
  templateUrl: './top-sale-table.component.html',
  styleUrls: ['./top-sale-table.component.css'],
})
export class TopSaleTableComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator | any;
  selectedCategory: string = '';
  listCategory: string[];
  selectedWarehouse: string = '';
  listWarehouse: string[];
  displayedColumns: string[] = [
    'codeGoods',
    'category',
    'unitsSold',
    'revenue',
    'profitMargin',
    'salesGrowthRate',
    'inventoryTurnover',
  ];
  dataTable: any[] = [
    {
      codeGoods: 'G001',
      goodsName: 'Product D',
      warehouse: 'Warehouse A',
      category: 'Health & Wellness',
      unitsSold: 1800,
      revenue: 72000,
      averageSellingPrice: 40,
      profitMargin: 0.3,
      salesGrowthRate: 0.12,
      inventoryTurnover: 15,
    },
    {
      codeGoods: 'G002',
      goodsName: 'Product E',
      warehouse: 'Warehouse A',
      category: 'Sports & Outdoors',
      unitsSold: 1000,
      revenue: 90000,
      averageSellingPrice: 90,
      profitMargin: 0.4,
      salesGrowthRate: 0.18,
      inventoryTurnover: 7,
    },
    {
      codeGoods: 'G003',
      goodsName: 'Product F',
      warehouse: 'Warehouse B',
      category: 'Beauty & Personal Care',
      unitsSold: 2500,
      revenue: 125000,
      averageSellingPrice: 50,
      profitMargin: 0.25,
      salesGrowthRate: 0.08,
      inventoryTurnover: 10,
    },
    {
      codeGoods: 'G004',
      goodsName: 'Product G',
      warehouse: 'Warehouse C',
      category: 'Books & Literature',
      unitsSold: 800,
      revenue: 24000,
      averageSellingPrice: 30,
      profitMargin: 0.2,
      salesGrowthRate: 0.1,
      inventoryTurnover: 5,
    },
    {
      codeGoods: 'G005',
      goodsName: 'Product H',
      warehouse: 'Warehouse D',
      category: 'Toys & Games',
      unitsSold: 1500,
      revenue: 75000,
      averageSellingPrice: 50,
      profitMargin: 0.25,
      salesGrowthRate: 0.05,
      inventoryTurnover: 9,
    },
    {
      codeGoods: 'G006',
      goodsName: 'Product I',
      warehouse: 'Warehouse E',
      category: 'Food & Beverage',
      unitsSold: 2000,
      revenue: 80000,
      averageSellingPrice: 40,
      profitMargin: 0.2,
      salesGrowthRate: 0.15,
      inventoryTurnover: 11,
    },
    {
      codeGoods: 'G007',
      goodsName: 'Product J',
      warehouse: 'Warehouse A',
      category: 'Office Supplies',
      unitsSold: 1200,
      revenue: 48000,
      averageSellingPrice: 40,
      profitMargin: 0.35,
      salesGrowthRate: 0.07,
      inventoryTurnover: 6,
    },
    {
      codeGoods: 'G008',
      goodsName: 'Product K',
      warehouse: 'Warehouse A',
      category: 'Pet Supplies',
      unitsSold: 1600,
      revenue: 80000,
      averageSellingPrice: 50,
      profitMargin: 0.3,
      salesGrowthRate: 0.09,
      inventoryTurnover: 13,
    },
  ];
  dataSource = new MatTableDataSource(this.dataTable);
  dataSourceWithPageSize = new MatTableDataSource(this.dataTable);

  constructor() {
    const setCategory = new Set<string>();
    const setWarehouse = new Set<string>();
    this.dataTable.forEach((data: any) => {
      setCategory.add(data.category);
      setWarehouse.add(data.warehouse);
    });
    this.listCategory = Array.from(setCategory);
    this.listWarehouse = Array.from(setWarehouse);
  }

  pageSizes = [3, 5, 7];

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {}

  isChangeFilter(): boolean {
    return (
      this.selectedCategory.length > 0 || this.selectedWarehouse.length > 0
    );
  }

  resetFilter(): void {
    this.selectedCategory = '';
    this.selectedWarehouse = '';
    this.dataSource = new MatTableDataSource(this.dataTable);
    this.dataSource.paginator = this.paginator;
  }
}

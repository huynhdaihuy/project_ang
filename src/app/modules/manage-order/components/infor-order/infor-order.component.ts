import { Component, Input, OnInit } from '@angular/core';
import {
  transportMethod,
  paymentMethods,
  statusPayment,
} from '../../.../../../../shared/mock/goods';
import { FormControl, FormGroup } from '@angular/forms';
interface GroupedData {
  [key: string]: {
    warehouse: any;
    items: { goods: any; quantity: number }[];
  };
}

@Component({
  selector: 'app-infor-order',
  templateUrl: './infor-order.component.html',
  styleUrls: ['./infor-order.component.css'],
})
export class InforOrderComponent implements OnInit {
  @Input() parentForm!: FormGroup;
  listGoodsByWarehouse: GroupedData = {};
  listTransportMethod: string[] = transportMethod;
  listPaymentMethod: string[] = paymentMethods;
  listStatusPayment: string[] = statusPayment;
  listGoodsAdded: any[] = [];
  total: number = 0;

  get shipping(): FormGroup {
    return this.parentForm.get('shipping') as FormGroup;
  }

  fc(groupName: string, controlName: string): FormControl {
    return this.parentForm.get(groupName)?.get(controlName) as FormControl;
  }

  constructor() {}

  ngOnInit(): void {
    this.parentForm.get('listGoods')?.valueChanges.subscribe((res: any) => {
      this.listGoodsByWarehouse = {};
      res.forEach((entry: any) => {
        const warehouseName = entry.warehouse.name;
        if (!this.listGoodsByWarehouse[warehouseName]) {
          this.listGoodsByWarehouse[warehouseName] = {
            warehouse: entry.warehouse,
            items: [],
          };
        }
        this.listGoodsByWarehouse[warehouseName].items.push({
          goods: entry.goods,
          quantity: entry.quantity,
        });
      });
    });
    this.parentForm.get('listGoods')!.valueChanges.subscribe((res: any) => {
      this.listGoodsAdded = res;
      this.listGoodsAdded.forEach(
        (el: any) => (this.total += el.goods.price * el.quantity)
      );
    });
  }
  log() {
    console.log(this.parentForm.value);
  }
}

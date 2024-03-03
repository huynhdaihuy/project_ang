import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { mockGoods } from '../../../../shared/mock/goods';

@Component({
  selector: 'app-manage-order-page',
  templateUrl: './manage-order-page.component.html',
  styleUrls: ['./manage-order-page.component.css'],
})
export class ManageOrderPageComponent implements OnInit {
  orderForm: FormGroup;
  listGoodsData = mockGoods;
  quantity: number = 0;
  warehouse: any = null;
  activeGoods: number = -1;
  filteredGoods: any[] = mockGoods;
  seachText: string = '';

  get listGoods(): FormArray {
    return this.orderForm.get('listGoods') as FormArray;
  }

  get customer(): FormGroup {
    return this.orderForm.get('customer') as FormGroup;
  }
  get name() {
    return this.customer.get('name') as FormControl;
  }
  constructor(private formBuilder: FormBuilder) {
    this.orderForm = this.formBuilder.group({
      customer: this.formBuilder.group({
        name: new FormControl('', [Validators.required]),
        address: new FormControl('', [Validators.required]),
        contact: new FormControl('', [Validators.required]),
        phone: new FormControl('', [Validators.required]),
      }),
      listGoods: this.formBuilder.array([]),
      shippingInfor: this.formBuilder.group({
        method: new FormControl('', [Validators.required]),
        deliveryAddress: new FormControl('', [Validators.required]),
      }),
      billingInfor: this.formBuilder.group({
        status: new FormControl('', [Validators.required]),
        method: new FormControl('', [Validators.required]),
      }),
    });
  }
  addGoods(goods: any): void {
    const goodsGroup = this.formBuilder.group({
      goods: new FormControl(goods),
      quantity: new FormControl(this.quantity),
      warehouse: new FormControl(this.warehouse),
    });
    this.listGoods.push(goodsGroup);
    this.quantity = 0;
    this.activeGoods = -1;
    this.warehouse = null;
  }
  isAddedGoods(id: any): boolean {
    return this.listGoods.value.find((el: any) => el.goods.id === id)
      ? true
      : false;
  }
  removeGoodsGroup(id: any): void {
    const indexGoods = this.listGoods.value.findIndex(
      (el: any) => el.goods.id == id
    );
    if (indexGoods === -1) return;
    this.listGoods.removeAt(indexGoods);
  }

  canAddGoods(indexGoods: number): boolean {
    return (
      this.quantity > 0 &&
      this.warehouse !== null &&
      this.activeGoods === indexGoods
    );
  }

  ngOnInit(): void {}
}

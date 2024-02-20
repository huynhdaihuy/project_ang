import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-goods',
  templateUrl: './add-goods.component.html',
  styleUrls: ['./add-goods.component.css'],
})
export class AddGoodsComponent implements OnInit {
  goodsForm: FormGroup;

  categories: string[];
  tagsList: string[];
  variantsList: string[];

  get variants() {
    return this.goodsForm.get('variants') as FormArray;
  }

  get tags() {
    return this.goodsForm.get('tags') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {
    this.goodsForm = this.formBuilder.group({
      name: [''],
      description: [''],
      image: [''],
      inventory: this.formBuilder.array([
        {
          name: [''],
          quantity: [''],
        },
      ]),
      category: [''],
      tags: this.formBuilder.array([]),
      price: [''],
      quantity: [''],
      variants: this.formBuilder.array([]),
    });

    this.categories = ['Category1', 'Category2', 'Category3'];
    this.tagsList = ['Tag1', 'Tag2', 'Tag3'];
    this.variantsList = ['Variant1', 'Variant2', 'Variant3'];
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.goodsForm.value);
  }

  addNewTag() {
    const newTagsForm = new FormControl('', [Validators.required]);
    this.tags.push(newTagsForm);
  }

  changeTabs(event: any) {
    console.log(event.target.value);
  }

  addOptions() {
    const newVariantsForm = new FormGroup({
      type: new FormControl('', [Validators.required]),
      detail: new FormControl('', [Validators.required]),
    });
    this.variants.push(newVariantsForm);
  }

  changeTags(event: any, i: number) {
    console.log(this.tags.controls);
    const variantFormControl = this.tags.at(i);
    variantFormControl.setValue(event.target.value);
  }

  changeOptions(event: any, i: number) {
    const variantFormControl = this.variants.at(i);
    const currentValue = variantFormControl.value || {};
    const updatedValue = { ...currentValue, type: event.target.value };
    variantFormControl.setValue(updatedValue);
  }

  changeDetailOptions(event: any, i: number) {
    const variantFormControl = this.variants.at(i);
    const currentValue = variantFormControl.value || {};
    const updatedValue = { ...currentValue, detail: event.target.value };
    variantFormControl.setValue(updatedValue);
  }
  changeCategory(event: any) {}
}

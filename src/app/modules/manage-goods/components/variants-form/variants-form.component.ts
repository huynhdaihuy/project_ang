import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-variants-form',
  templateUrl: './variants-form.component.html',
  styleUrls: ['./variants-form.component.css'],
})
export class VariantsFormComponent implements OnInit {
  @Input() parentForm: FormGroup | any;
  @Input() variantsForm: FormArray | any;
  @Input() variantsList: string[] = [];

  constructor() {}
  ngOnInit(): void {}
  addOptions() {
    this.variantsForm.push(
      new FormGroup({
        type: new FormControl('', [Validators.required]),
        detail: new FormControl('', [Validators.required]),
      })
    );
  }

  changeOptions(event: any, i: number) {
    const variantFormControl = this.variantsForm.at(i).get('type');
    variantFormControl.setValue(event.target.value);
  }

  changeDetailOptions(event: any, i: number) {
    const variantFormControl = this.variantsForm.at(i).get('detail');
    variantFormControl.setValue(event.target.value);
  }
}

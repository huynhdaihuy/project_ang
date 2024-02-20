import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tags-form',
  templateUrl: './tags-form.component.html',
  styleUrls: ['./tags-form.component.css'],
})
export class TagsFormComponent implements OnInit {
  @Input() tagsForm: FormArray | any;
  @Input() tagsList: string[] = [];
  @Input() parentForm: FormGroup | any;

  constructor() {}
  ngOnInit(): void {}

  addNewTag() {
    this.tagsForm.push(new FormControl(''));
  }

  changeTags(event: any, i: number) {
    this.tagsForm.at(i).setValue(event.target.value);
  }
}

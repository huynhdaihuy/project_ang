import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IRecipe } from 'src/app/shared/models/recipe';

@Component({
  selector: 'app-recipe-edit-promp',
  templateUrl: './recipe-edit-promp.component.html',
  styleUrls: ['./recipe-edit-promp.component.css'],
})
export class RecipeEditPrompComponent implements OnInit {
  updateData: IRecipe | undefined;
  editIngredientMode: boolean = false;
  editInstructionMode: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<RecipeEditPrompComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IRecipe | undefined
  ) {}

  ngOnInit(): void {
    this.updateData = this.data;
    console.log(this.updateData);
  }
  onSubmit() {
    console.log(this.updateData);
  }
  closePromp() {
    this.dialogRef.close();
  }
}

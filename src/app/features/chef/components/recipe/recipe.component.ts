import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RecipeEditPrompComponent } from '../recipe-edit-promp/recipe-edit-promp.component';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'url_image',
    '_id',
    'title',
    'price',
    'sold',
    'hardness',
    'time',
    'action',
  ];

  recipes: any[] = [
    {
      sold: 0,
      price: 50.99,
      ingredients: [
        {
          name: 'Ingredients 1',
          quantity: '1 teaspoon',
        },
        {
          name: 'Ingredients 2',
          quantity: '1.5 teaspoon',
        },
        {
          name: 'Ingredients 3',
          quantity: '200 ml',
        },
      ],
      instructions: [
        'Clean ingredients',
        'Boil water',
        'Set microwave to 120 degree',
        'Grill the polk',
      ],
      ratings: [],
      _id: '65b871f7423ae00d782b10e2',
      time: 30,
      hardness: 'hard',
      title: 'Title recipe 6',
      method: 'bake',
      url_image:
        'https://res.cloudinary.com/dggneknsl/image/upload/v1706492383/e7ygw79jyr6cslnmxjpu.jpg',
      url_video:
        'https://res.cloudinary.com/dggneknsl/video/upload/v1706492390/jgdck3zjfnjhd053tafc.mp4',
      description:
        ' Master the art of making the perfect savory quiche with this timeless recipe. From the flaky pastry crust to the creamy filling of eggs, cream, and crisp bacon, this Quiche Lorraine is a delightful balance of textures and flavors.',
      author: '65b86bae45091c34506d5b3c',
      createdAt: '2024-01-30T03:50:15.995Z',
      updatedAt: '2024-01-30T03:50:15.995Z',
      __v: 0,
    },
    {
      sold: 0,
      price: 6.99,
      ingredients: [
        {
          name: 'Ingredients 1',
          quantity: '1 teaspoon',
        },
        {
          name: 'Ingredients 2',
          quantity: '1.5 teaspoon',
        },
        {
          name: 'Ingredients 3',
          quantity: '200 ml',
        },
      ],
      instructions: [
        'Clean ingredients',
        'Boil water',
        'Set microwave to 120 degree',
        'Grill the polk',
      ],
      ratings: [],
      _id: '65b700d1e7e9fa3ec8ff7e24',
      time: 10,
      hardness: 'easy',
      title: 'Title recipe 1',
      method: 'grill',
      author: '65b6febbe7e9fa3ec8ff7e21',
      url_image:
        'https://res.cloudinary.com/dggneknsl/image/upload/v1706492115/ku1uk2gl2owmghh83l8e.jpg',
      url_video:
        'https://res.cloudinary.com/dggneknsl/video/upload/v1706492121/r8mduq6grxdnukpxwtph.mp4',
      createdAt: '2024-01-29T01:35:22.841Z',
      updatedAt: '2024-01-29T06:37:10.129Z',
      __v: 2,
      description:
        ' Master the art of making the perfect savory quiche with this timeless recipe. From the flaky pastry crust to the creamy filling of eggs, cream, and crisp bacon, this Quiche Lorraine is a delightful balance of textures and flavors.',
    },
    {
      sold: 0,
      price: 50.99,
      ingredients: [
        {
          name: 'Ingredients 1',
          quantity: '1 teaspoon',
        },
        {
          name: 'Ingredients 2',
          quantity: '1.5 teaspoon',
        },
        {
          name: 'Ingredients 3',
          quantity: '200 ml',
        },
      ],
      instructions: [
        'Clean ingredients',
        'Boil water',
        'Set microwave to 120 degree',
        'Grill the polk',
      ],
      ratings: [],
      _id: '65b701ddad577c3a603449f1',
      time: 30,
      hardness: 'hard',
      title: 'Title recipe 6',
      method: 'bake',
      author: '65b6febbe7e9fa3ec8ff7e21',
      url_image:
        'https://res.cloudinary.com/dggneknsl/image/upload/v1706492383/e7ygw79jyr6cslnmxjpu.jpg',
      url_video:
        'https://res.cloudinary.com/dggneknsl/video/upload/v1706492390/jgdck3zjfnjhd053tafc.mp4',
      createdAt: '2024-01-29T01:39:51.884Z',
      updatedAt: '2024-01-29T06:37:10.154Z',
      __v: 2,
      description:
        ' Master the art of making the perfect savory quiche with this timeless recipe. From the flaky pastry crust to the creamy filling of eggs, cream, and crisp bacon, this Quiche Lorraine is a delightful balance of textures and flavors.',
    },
    {
      sold: 0,
      price: 29.99,
      ingredients: [
        {
          name: 'Ingredients 1',
          quantity: '1 teaspoon',
        },
        {
          name: 'Ingredients 2',
          quantity: '1.5 teaspoon',
        },
        {
          name: 'Ingredients 3',
          quantity: '200 ml',
        },
      ],
      instructions: [
        'Clean ingredients',
        'Boil water',
        'Set microwave to 120 degree',
        'Grill the polk',
      ],
      ratings: [],
      _id: '65b7022bad577c3a603449f7',
      time: 30,
      hardness: 'medium',
      title: 'Title recipe 8',
      method: 'steam',
      author: '65b6febbe7e9fa3ec8ff7e21',
      url_image:
        'https://res.cloudinary.com/dggneknsl/image/upload/v1706492461/ah2ecrwylxbxm8pz6bua.webp',
      url_video:
        'https://res.cloudinary.com/dggneknsl/video/upload/v1706492467/eewnvfcbzxtrovmfwwyk.mp4',
      createdAt: '2024-01-29T01:41:08.625Z',
      updatedAt: '2024-01-29T06:37:10.157Z',
      __v: 2,
      description:
        ' Master the art of making the perfect savory quiche with this timeless recipe. From the flaky pastry crust to the creamy filling of eggs, cream, and crisp bacon, this Quiche Lorraine is a delightful balance of textures and flavors.',
    },
  ];

  dataSource = new MatTableDataSource<any>(this.recipes);

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  handleDeleteRecipe(id: string) {
    this.recipes = this.recipes.filter((data) => data._id !== id);
    this.dataSource = new MatTableDataSource<any>(this.recipes);
  }
  handleUpdateRecipe(data: any) {
    this.matDialog.open(RecipeEditPrompComponent, {
      data,
    });
  }
}

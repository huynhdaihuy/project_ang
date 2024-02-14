export interface IRecipe {
    sold: number;
    price: number;
    ingredients: IIngredient[];
    instructions: string[];
    ratings: number[];
    _id: string;
    time: number;
    hardness: string;
    title: string;
    method: string;
    author: string;
    url_image: string;
    url_video: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    description: string;
  }
  
  interface IIngredient {
    name: string;
    quantity: string;
  }
  
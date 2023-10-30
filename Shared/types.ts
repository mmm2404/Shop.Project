

export interface IComment {
    id: string;
    name: string;
    email: string;
    body: string;
    productId: string;
} 

export interface IProduct{
    thumbnail?: IProductImage;
    images?: IProductImage[];
    id: string;
    title: string;
    description: string;
    price: number;
    comments?:IComment[];
}

export interface IProductImage {
    id: string;
    productId: string;
    main: boolean;
    url: string;
  }

export interface IProductFilterPayload {
    title?: string;
    description?: string;
    priceFrom?: number;
    priceTo?: number;
}

  
  export interface IAuthRequisites {
    username: string;
    password: string;
} 
  
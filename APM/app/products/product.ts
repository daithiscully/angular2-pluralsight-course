export interface IProduct {
    productId:number;
    productName:string;
    productCode:string;
    releaseDate:string;
    price:number;
    description:string;
    starRating:number;
    imageUrl:string;
}

// We could define a class for a business object here as well e.g.
/*
export class Product implements IProduct {

    constructor(public productId:number,
                public productName:string,
                public productCode:string,
                public releaseDate:string,
                public price:number,
                public description:string,
                public starRating:number,
                public imageUrl:string){

    }

    calculateDiscount(percent: number): number {
        return this.price - (this.price * percent / 100);
    }
}
*/

// We would only create a business object class if that class provides
// some functionality that we want to use throughout our application such as the calculateDiscount method

// This pluralsight course wont be utilizing any Product objects so we dont need it,
// but we will be using the Interface throughout the application to strongly type our products

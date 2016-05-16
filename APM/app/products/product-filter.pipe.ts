import {PipeTransform, Pipe} from "angular2/core";
import {IProduct} from "./product";

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

    // Transform a passed in list of Products (value array) to a filtered list
    // based on a user entered filter string (the args array)
    transform(value:IProduct[], args:string[]):IProduct[] {
        // Pull the filter string from the first element of the args array
        // and convert to lowercase (case-insensitive comparison)
        let filter:string = args[0] ? args[0].toLocaleLowerCase() : null;

        // Return the filtered list of Products
        return filter ? value.filter((product:IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }

}
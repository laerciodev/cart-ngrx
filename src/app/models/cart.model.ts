import { ProductModel } from './product.model';
export interface CartModel {
    products: ProductModel[];
    total: number;
}

import { createReducer, on, Action } from '@ngrx/store';
import { add, remove, clear } from '../actions/cart.action';
import { CartModel } from '../models/cart.model';
import { ProductModel } from '../models/product.model';

export const initialState: CartModel = {
    products: [],
    total: 0
};

function calculateTotal(products: ProductModel[]) {
    let total = 0;
    products.forEach(product => {
        total += parseInt(product.price, 10);
    });
    return total;
}


// tslint:disable-next-line: variable-name
const _cartReducer = createReducer(
    initialState,
    on(add, (state, { product }) => {
        return {
            ...initialState,
            products: [...state.products, product],
            total: calculateTotal(state.products)
        };
    }),
    on(remove, (state, { product }) => {
        const index = state.products.indexOf(product);
        return {
            ...initialState,
            products: [
                ...state.products.slice(0, index),
                ...state.products.slice(index + 1)
            ],
            total: calculateTotal(state.products)
        };
    }),
    on(clear, state => (initialState))
);

export function cartReducer(state: CartModel | undefined, action: Action) {
    return _cartReducer(state, action);
}

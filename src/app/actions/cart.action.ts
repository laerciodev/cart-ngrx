import { createAction, props } from '@ngrx/store';
import { ProductModel } from '../models/product.model';

export const add = createAction('[Navbar Component] Add', props<{ product: ProductModel }>());
export const remove = createAction('[Navbar Component] Remove', props<{ product: ProductModel }>());
export const clear = createAction('[Navbar Component] Clear');

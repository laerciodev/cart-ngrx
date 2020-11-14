import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { CartModel } from 'src/app/models/cart.model';
import { ProductModel } from 'src/app/models/product.model';
import { remove, clear } from '../../actions/cart.action';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent {

  cart$: Observable<CartModel>;

  constructor(
    private store: Store<{ cart: CartModel }>,
    private alertController: AlertController
  ) {
    this.cart$ = store.select('cart');
  }

  remove(product: ProductModel) {
    this.store.dispatch(remove({ product }));
  }

  reset() {
    this.store.dispatch(clear());
  }

  async confirmRemove(item: ProductModel) {
    const alert = await this.alertController.create({
      header: 'Remover item',
      message: `Deseja remover o item ${item.title}?`,
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        { text: 'Remover', handler: () => this.remove(item) }
      ]
    });

    await alert.present();
  }
}

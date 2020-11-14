import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastController } from '@ionic/angular';
import { Add } from 'src/app/actions/card.action';
import { DataService } from 'src/app/data.service';
import { CartModel } from 'src/app/models/cart.model';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

  public products: ProductModel[];

  constructor(
    private store: Store<{ cart: CartModel }>,
    private service: DataService,
    private toastController: ToastController
    ) {}

  ngOnInit() {
    this.service.getProducts().subscribe( data => this.products = data);
  }

  add(product: ProductModel) {
    // dispatch invoca uma ação
    this.store.dispatch(Add(product));
    this.showToast(product.title);
  }

  private async showToast(productName: string) {
    const toast = await this.toastController.create({
      message: `${productName} adicionado ao carinho.`,
      duration: 2000,
    });
    toast.present();
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { NavbarComponent } from '../components/navbar/navbar.component';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { CounterComponent } from '../components/counter/counter.component';
import { ScoreboardComponent } from '../components/scoreboard/scoreboard.component';
import { ShoppingCartComponent } from '../components/shopping-cart/shopping-cart.component';
import { MoviesComponent } from '../components/movies/movies.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    NavbarComponent,
    ProductListComponent,
    CounterComponent,
    ScoreboardComponent,
    ShoppingCartComponent,
    MoviesComponent
  ]
})
export class HomePageModule {}

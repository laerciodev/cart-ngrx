import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { NavbarComponent } from '../components/navbar/navbar.component';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { CounterComponent } from '../components/counter/counter.component';

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
    CounterComponent
  ]
})
export class HomePageModule {}

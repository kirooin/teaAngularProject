import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/pages/main/main.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { PopupComponent } from './components/common/popup/popup.component';
import { ProductCardComponent } from './components/common/product-card/product-card.component';
import {ProductService} from "./service/product.service";
import {HttpClientModule} from "@angular/common/http";
import { ProductComponent } from './components/pages/product/product.component';
import { OrderComponent } from './components/pages/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    PopupComponent,
    ProductCardComponent,
    ProductComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

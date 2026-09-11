import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/pages/main/main.component";
import {ProductsComponent} from "./components/pages/products/products.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'products', component: ProductsComponent},
  {path: '**', component: MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

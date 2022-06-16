import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { HomeComponent } from './home/home.component';
import { ListProductsComponent } from './list-products/list-products.component';

const routes: Routes = [
 {
  path: "",
  children: [
    {
      path: "",
      component: HomeComponent
    },
    {
      path:"products",
      component: ListProductsComponent
    },
    {
      path: "products/add",
      component: AddProductsComponent
    },
    {
      path: "products/:id",
      component: AddProductsComponent
    }
  ]
 }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

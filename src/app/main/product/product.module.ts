import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { RouterModule, Routes } from "@angular/router";
const productRoutes: Routes = [
  {path:'', component:ProductComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes),
  ],
  declarations: [ProductComponent]
})
export class ProductModule { }

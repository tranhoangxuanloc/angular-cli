import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategoryComponent } from './product-category.component';
import { RouterModule, Routes } from "@angular/router";
const productcategoryRoutes: Routes = [
  {path:'', component: ProductCategoryComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productcategoryRoutes),
  ],
  declarations: [ProductCategoryComponent]
})
export class ProductCategoryModule { }

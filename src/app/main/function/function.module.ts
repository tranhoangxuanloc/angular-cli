import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunctionComponent } from './function.component';
import { RouterModule, Routes } from "@angular/router";
const functionRoutes: Routes = [
  { path: '', component: FunctionComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(functionRoutes)
  ],
  declarations: [FunctionComponent]
})
export class FunctionModule { }

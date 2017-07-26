import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './role.component';
import { RouterModule, Routes } from "@angular/router";
const roleRoutes: Routes = [
  { path: '', component: RoleComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(roleRoutes),
  ],
  declarations: [RoleComponent]
})
export class RoleModule { }

import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
export const mainRoutes: Routes = [
    {
        path: '', component: MainComponent, children: [
            //{ path: '', redirectTo: 'user', pathMatch: 'full' },
            { path: 'user', loadChildren: './user/user.module#UserModule' },
            { path: 'function', loadChildren: './function/function.module#FunctionModule' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            {path: 'product', loadChildren: './product/product.module#ProductModule'},
            {path: 'product-category', loadChildren: './product-category/product-category.module#ProductCategoryModule'},
            {path: 'role',loadChildren:'./role/role.module#RoleModule'},
        ]
    }

]
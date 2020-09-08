import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import {AuthGuard} from './guards/auth.guard';
import { CategoryComponent } from './category/category.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { ProductComponent } from './product/product.component';
import { AgencyComponent } from './agency/agency.component';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path:'agency',
        component: AgencyComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard]
      },
      {
		    path:'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard]
	    }
    ],
  },
  {
    path:'category-add',
    component: CategoryAddComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard]
  },
  {
    path:'category-edit/:id',
    component: CategoryEditComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard]
  },
  {
    path:'rankuser',
    component: RankUserComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard]
  },
  {
    path:'rankagency',
    component: RankAgencyComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard]
  },
  {
    path:'ranktopuser',
    component: RankTopUserComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

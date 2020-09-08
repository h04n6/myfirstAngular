import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

//services
import { API } from './services/api';
import {AccountService} from './services/account.service';
import { AdminComponent } from './admin/admin.component';
import {CategoryService} from './services/category.service';
import { CategoryComponent } from './category/category.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { ProductComponent } from './product/product.component';
import { AgencyComponent } from './agency/agency.component';
import { RankUserComponent } from './rank-user/rank-user.component';
import { RankAgencyComponent } from './rank-agency/rank-agency.component';
import {RaceService } from './services/race.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RankTopUserComponent } from './rank-top-user/rank-top-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    CategoryComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    ProductComponent,
    AgencyComponent,
    RankUserComponent,
    RankAgencyComponent,
    DashboardComponent,
    RankTopUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [
    API,
    AccountService,
    CategoryService,
    RaceService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

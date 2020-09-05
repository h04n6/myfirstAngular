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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    CategoryComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    ProductComponent,
    AgencyComponent
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
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

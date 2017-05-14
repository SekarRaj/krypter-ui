import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {
  EmployeeListComponent,
  EmployeeAddComponent,
  EmployeeEditComponent
}
  from '../employee/index';
import { CustomerListComponent } from '../customer/index';
import { WelcomeComponent } from '../welcome/index';
import { PayablesComponent } from '../payables/index';
import { ReceivablesComponent } from '../receivables/index';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeAddComponent,
    EmployeeEditComponent,
    WelcomeComponent,
    CustomerListComponent,
    PayablesComponent,
    ReceivablesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'employee', component: EmployeeListComponent },
      { path: 'employee/add', component: EmployeeAddComponent },
      { path: 'employee/edit', component: EmployeeEditComponent },
      { path: 'customer', component: CustomerListComponent },
      { path: 'ap', component: PayablesComponent },
      { path: 'ar', component: ReceivablesComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
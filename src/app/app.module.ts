import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from '../employee/index';
import { CustomerListComponent } from '../customer/index';
import { WelcomeComponent } from '../welcome/index';
import { PayablesComponent } from '../payables/index';
import { ReceivablesComponent } from '../receivables/index';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    WelcomeComponent,
    CustomerListComponent,
    PayablesComponent,
    ReceivablesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'employee', component: EmployeeListComponent },
      { path: 'customer', component: CustomerListComponent },
      { path: 'ap', component: PayablesComponent },
      { path: 'ar', component: ReceivablesComponent }      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
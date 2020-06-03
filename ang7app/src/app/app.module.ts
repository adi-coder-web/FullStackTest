import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule  } from '@angular/flex-layout';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {HttpClientModule } from '@angular/common/http';
import {HomeComponent} from 'home/home.component';
import {ProductComponent} from 'products/product.component';
import {OktaAuthModule} from '@okta/okta-angular';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';
import { RegisterComponent } from './user/register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    EmployeeComponent,
    UserComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent 
  ],
  imports: [
    OktaAuthModule.initAuth({
      issuer: 'https://0oadrspvajSIUItCN4x6/oauth2/default',
      redirectUri: 'http://localhost:4200/implicit/callback',
      clientId: '0oadrspvajSIUItCN4x6'
    }),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

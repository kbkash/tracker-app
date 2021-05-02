import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './_pages/auth/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbInputModule, NbCardModule, NbButtonModule, NbCheckboxModule, NbRadioModule, NbSpinnerModule, NbIconModule, NbSidebarModule, NbMenuModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HttpClientModule } from '@angular/common/http';
import { ResetPasswordComponent } from './_pages/auth/reset-password/reset-password.component';
import { AuthComponent } from './_pages/auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SetPasswordComponent } from './_pages/auth/set-password/set-password.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    ResetPasswordComponent,
    SetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbSidebarModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    NbInputModule,
    NbCardModule,
    NbCheckboxModule,
    NbButtonModule,
    NbRadioModule,
    NbSpinnerModule,
    NbIconModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

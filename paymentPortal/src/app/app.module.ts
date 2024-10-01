import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BillFormComponent } from './bill-form/bill-form.component';
import { MatCardModule } from '@angular/material/card';


import { MatSelectModule } from '@angular/material/select';

import { MatInputModule } from '@angular/material/input';

import { MatButtonModule } from '@angular/material/button';

import { MatFormFieldModule } from '@angular/material/form-field'; // Import MatFormFieldModule
import { ReactiveFormsModule } from '@angular/forms';
import { VerifyComponent } from './verify/verify.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    BillFormComponent,
    VerifyComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,
    AppRoutingModule,MatToolbarModule,MatIconModule,MatCardModule,MatSelectModule,MatInputModule,MatButtonModule,MatFormFieldModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

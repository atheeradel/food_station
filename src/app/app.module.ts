import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule, ToastNoAnimation, 
  ToastNoAnimationModule} 
  from 'ngx-toastr';
  import { MatDialogModule } from '@angular/material/dialog';
  import { MatButtonModule } from '@angular/material/button';
  import { ReactiveFormsModule } from '@angular/forms';
  import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { HomeModule } from './home/home.module';


 // Needed for mat-option
@NgModule({
  declarations: [
    AppComponent,
 
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  BrowserAnimationsModule,
    AdminModule,
    HomeModule,
    AuthModule,
    HttpClientModule,
    NgxSpinnerModule,
    ToastNoAnimationModule.forRoot(),
    ToastrModule.forRoot(),
    ToastNoAnimation,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
   
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

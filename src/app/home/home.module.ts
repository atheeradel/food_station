import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MenueComponent } from './menue/menue.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductsComponent } from './products/products.component';
import { ReservetableComponent } from './reservetable/reservetable.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AboutUsComponent,
    MenueComponent,
    ContactUsComponent,
    ProductsComponent,
    ReservetableComponent,
   
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,  // For reactive forms
    MatDialogModule,      // For Material dialog
    MatButtonModule,      // For Material buttons
    MatFormFieldModule,   // For Material form fields
    MatInputModule ,
    MatSelectModule,
    MatOptionModule ,
    FormsModule
  ]
})
export class HomeModule { }

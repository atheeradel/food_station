import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';
import { ContactmsgComponent } from './contactmsg/contactmsg.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';  // Needed for mat-option
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TestimonalComponent } from './testimonal/testimonal.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ReserveComponent } from './reserve/reserve.component';



@NgModule({
  declarations: [
    SidebarComponent,
    AdmindashboardComponent,
    ProfileComponent,
    AccountComponent,
    ContactmsgComponent,
    TestimonalComponent,
    AboutusComponent,
    CategoryComponent,
    ProductComponent,
    ReserveComponent,
   
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,  // For reactive forms
    MatDialogModule,      // For Material dialog
    MatButtonModule,      // For Material buttons
    MatFormFieldModule,   // For Material form fields
    MatInputModule ,
    MatSelectModule,
    MatOptionModule ,
   
       // For Material inputs
  ],
  exports: [
    SidebarComponent,
    AdmindashboardComponent
  ]
})
export class AdminModule { }

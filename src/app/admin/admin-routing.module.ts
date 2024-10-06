import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';
import { ContactmsgComponent } from './contactmsg/contactmsg.component';
import { TestimonalComponent } from './testimonal/testimonal.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ReserveComponent } from './reserve/reserve.component';

const routes: Routes = [
  {
    path:'dashboard'
    ,
    component:AdmindashboardComponent
    },
    {path:'profile'
      ,
      component:ProfileComponent
    },
    {
      path:'account',
      component:AccountComponent
    },{
      path:'contact-us',
      component:ContactmsgComponent
    },{
      path:'testimonal',
      component:TestimonalComponent
    },{
      path:'about-us',
      component:AboutusComponent
    },{
      path:'Category',
      component:CategoryComponent
    },
    {
      path:'product',
      component:ProductComponent
    },
    {
      path:'reserve',
      component:ReserveComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

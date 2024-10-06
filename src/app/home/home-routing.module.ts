import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MenueComponent } from './menue/menue.component';
import { ProductsComponent } from './products/products.component';
import { ReservetableComponent } from './reservetable/reservetable.component';

const routes: Routes = [
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'footer',
    component:FooterComponent
  },{
    path:'main',
    component:MainComponent
  },{
    path:'about-us',
    component:AboutUsComponent
  },{
    path:'contact-us',
    component:ContactUsComponent
  },{
    path:'menue',
    component:MenueComponent
  },
  {
    path:'products/:categoryname', 
    component:ProductsComponent
   },
   {
    path:'reserve',
    component:ReservetableComponent
   }
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

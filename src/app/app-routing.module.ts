import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { ContactmsgComponent } from './admin/contactmsg/contactmsg.component';
import { HomeModule } from './home/home.module';

const routes: Routes = [
 {
  path:'admin',
  loadChildren:()=>AdminModule
 },{
  path:'',
  loadChildren:()=>AuthModule
 },{
  path:'home',
  loadChildren:()=>HomeModule
 }
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

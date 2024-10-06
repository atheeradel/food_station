import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
   selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
spinner: any;
product: any;
toastr: any;
constructor(public admin:AdminService,public router:Router){
}
test1:any=[];
products:any=[];
ngOnInit(): void {
  this.admin.getaboutus();
  this.admin.getAllcategory();
  this.admin.getAllproduct();
  this.admin.getfilterTestimonal();
  
 
}
goToCategory(categoryname: string) {
  this.router.navigate(['/products', categoryname]);
}

}

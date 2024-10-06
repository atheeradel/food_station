import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  categoryname: string | null = '';
  products: any[] = [];  
  

  constructor(private http:HttpClient,private route: ActivatedRoute,private spinner: NgxSpinnerService,private toastr:ToastrService) {}

  ngOnInit() {
   
    this.categoryname = this.route.snapshot.paramMap.get('categoryname');
    this.spinner.show();
    this.http.get('https://localhost:7083/api/Product').subscribe((res:any)=>{
      this.products=res.filter((test:any) => test.categoryname=== this.categoryname );
      console.log(this.products);
      setTimeout(() => {
        /** spinner ends after 5 seconds */
       
        this.spinner.hide();
      }, 2000);
      
     
    },
  err=>{
    this.toastr.error('please try again there is an error!');
  })
   
  }

}

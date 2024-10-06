import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";
import {ToastrService} from 'ngx-toastr';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient,private spinner: NgxSpinnerService,private toastr:ToastrService) { 
  }
  adminuser: any=[];
  msg:any=[];
  testimonal:any=[];
  about:any=[];
  teststate!: string; 
  category:any=[];
  product:any=[];
  reserve:any=[];
  getadmin(){
    this.spinner.show();
    this.http.get('https://localhost:7083/api/User').subscribe((res:any)=>{
      this.adminuser=res;
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
        this.toastr.success('your profile data retrived successfully');
      }, 2000
    ); },
  err=>{
    this.toastr.error('there is an error plese try again!'); })}

  UpdateUser(id: number, body: any) {
    this.http.put(`https://localhost:7083/api/User/${id}`, body).subscribe(
      (resp: any) => {
        this.toastr.success('Updated Successfully');
      },
      err => {
        this.toastr.error('Something went wrong !');
        console.log(err);
      } );}

  getcontact(){
    this.spinner.show();
    this.http.get('https://localhost:7083/api/Contactus').subscribe((res:any)=>{
      this.msg=res;
      
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.toastr.success('the user message retrived successfully');
        this.spinner.hide();
      }, 2000);
     
    },
  err=>{
    this.toastr.error('please try again there is an error!');
  }) }

  getaboutus(){
    this.spinner.show();
    this.http.get('https://localhost:7083/api/Aboutus').subscribe((res:any)=>{
      this.about=res;
      console.log(this.about);
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        
        this.spinner.hide();
      }, 2000);
      
     
    },
  err=>{
    this.toastr.error('please try again there is an error!');
  })
  
  }
  getTestimonal(){
    this.spinner.show();
    this.http.get('https://localhost:7083/api/Testimonal').subscribe((res:any)=>{
      this.testimonal=res;
      console.log(this.testimonal);
      setTimeout(() => {
        /** spinner ends after 5 seconds */
       
        this.spinner.hide();
      }, 2000);
      
     
    },
  err=>{
    this.toastr.error('please try again there is an error!');
  })
  
  }

  getfilterTestimonal(){
    this.spinner.show();
    this.http.get('https://localhost:7083/api/Testimonal').subscribe((res:any)=>{
      this.testimonal=res.filter((test:any) => test.testimonalstate=== 1);
      console.log(this.testimonal);
      setTimeout(() => {
        /** spinner ends after 5 seconds */
       
        this.spinner.hide();
      }, 2000);
      
     
    },
  err=>{
    this.toastr.error('please try again there is an error!');
  })
  
  }
  Updatetest(id: number, body: any) {
    this.http.put(`https://localhost:7083/api/Testimonal/${id}`, body).subscribe(
      (resp: any) => {
        if(body.testimonalstate==1){
          this.toastr.success('Accepted Successfully');
        }
        else{
          this.toastr.error('Rejected Successfully');
        }
        
      },
      err => {
        this.toastr.error('Something went wrong !');
        console.log(err);
      }
    );
  }
  createabout( body: any) {
    body.aboutusimage=this.display_image;
    this.http.post('https://localhost:7083/api/Aboutus', body).subscribe(
      (resp: any) => {
       
          this.toastr.success('Created Successfully');  
      },
      err => {
        this.toastr.error('Something went wrong !');
        console.log(err);
      }
    );
  }
  createstimonal( body: any) {
    debugger;
    body.testimonalstate=0;
    this.http.post('https://localhost:7083/api/Testimonal', body).subscribe(
      (resp: any) => {
       
          this.toastr.success('your Testimonal Send Successfully');  
      },
      err => {
        this.toastr.error('Something went wrong !');
        console.log(err);
      }
    );
  }
  createproduct( body: any) {
    body.productimage=this.display_image3;
    this.http.post('https://localhost:7083/api/Product', body).subscribe(
      (resp: any) => {
       
          this.toastr.success('Created Successfully');  
      },
      err => {
        this.toastr.error('Something went wrong !');
        console.log(err);
      }
    );
  }
  createcontact(body: any): Observable<any> {
    return this.http.post('https://localhost:7083/api/Contactus', body);
  }
  createcategory( body: any) {
    body.categoryimage=this.display_image2;
    this.http.post('https://localhost:7083/api/Category', body).subscribe(
      (resp: any) => {
       
          this.toastr.success('Created Successfully');  
      },
      err => {
        this.toastr.error('Something went wrong !');
        console.log(err);
      }
    );
  }
 deleteabout( id: number) {
   
    this.http.delete(`https://localhost:7083/api/Aboutus/${id}`).subscribe(
      (resp: any) => {
          this.toastr.success('Deleted Successfully');  
      },
      err => {
        this.toastr.error('Something went wrong !');
        console.log(err);
      }
    );
  }
  deletecategory( id: number) {
   
    this.http.delete(`https://localhost:7083/api/Category/${id}`).subscribe(
      (resp: any) => {
          this.toastr.success('Deleted Successfully');  
      },
      err => {
        this.toastr.error('Something went wrong !');
        console.log(err);
      }
    );
  }
  deleteproduct( id: number) {
   
    this.http.delete(`https://localhost:7083/api/Product/${id}`).subscribe(
      (resp: any) => {
          this.toastr.success('Deleted Successfully');  
      },
      err => {
        this.toastr.error('Something went wrong !');
        console.log(err);
      }
    );
  }
  updateaboutus( id: number,body:any) {
  body.aboutusimage=this.display_image; 
   this.http.put(`https://localhost:7083/api/Aboutus/${id}`, body).subscribe(
      (resp: any) => {
          this.toastr.success('Updated Successfully');  
      },
      err => {
        this.toastr.error('Something went wrong !');
        console.log(err);
      }
    );
  }
  updatecategory( id: number,body:any) {
    body.categoryimage=this.display_image2; 
     this.http.put(`https://localhost:7083/api/Category/${id}`, body).subscribe(
        (resp: any) => {
            this.toastr.success('Updated Successfully');  
        },
        err => {
          this.toastr.error('Something went wrong !');
          console.log(err);
        }
      );
    }
    updateproduct( id: number,body:any) {
      body.productimage=this.display_image3; 
       this.http.put(`https://localhost:7083/api/Product/${id}`, body).subscribe(
          (resp: any) => {
              this.toastr.success('Updated Successfully');  
          },
          err => {
            this.toastr.error('Something went wrong !');
            console.log(err);
          }
        );
      }
 getAllcategory( ) {
    this.spinner.show();
     this.http.get(`https://localhost:7083/api/Category`).subscribe(
        (resp: any) => {
          setTimeout(() => {
            /** spinner ends after 5 seconds */
           
            this.category=resp;
            this.spinner.hide();
          }, 2000);},

        err => {
          this.toastr.error('Something went wrong !');
          console.log(err);});}
          getAllreserve( ) {
            this.spinner.show();
             this.http.get(`https://localhost:7083/api/Reservations`).subscribe(
                (resp: any) => {
                  setTimeout(() => {
                    /** spinner ends after 5 seconds */
                   
                    this.reserve=resp;
                    this.spinner.hide();
                  }, 2000);},
        
                err => {
                  this.toastr.error('Something went wrong !');
                  console.log(err);});}

          getAllproduct( ) {
            this.spinner.show();
             this.http.get(`https://localhost:7083/api/Product`).subscribe(
                (resp: any) => {
                  setTimeout(() => {
                    /** spinner ends after 5 seconds */
                   
                    this.product=resp;
                    this.spinner.hide();
                  }, 2000);},
        
                err => {
                  this.toastr.error('Something went wrong !');
                  console.log(err);});}
  
  display_image:any;
uploadAttachment(file :FormData){
debugger
this.http.post('https://localhost:7083/api/Aboutus/uploadImage',file).subscribe((resp:any)=>{
console.log("Resp Upload function",resp);
this.display_image= resp.aboutusimage;
},err=>{
this.toastr.error('Something wont wrong');
console.log(err); }) }

display_image2:any;
uploadAttachment2(file :FormData){
debugger
this.http.post('https://localhost:7083/api/Category/uploadImage',file).subscribe((resp:any)=>{
console.log("Resp Upload function",resp);
this.display_image2= resp.categoryimage;
},err=>{
this.toastr.error('Something wont wrong');
console.log(err); }) }

display_image3:any;
uploadAttachment3(file :FormData){
debugger
this.http.post('https://localhost:7083/api/Product/uploadImage',file).subscribe((resp:any)=>{
console.log("Resp Upload function",resp);
this.display_image3= resp.productimage;
},err=>{
this.toastr.error('Something wont wrong');
console.log(err); }) }

}

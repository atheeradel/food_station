import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  constructor(public admin:AdminService,public dialog:MatDialog){}
  ngOnInit(): void {
    this.admin.getAllproduct();
    this.admin.getAllcategory();
  }
  createForm: FormGroup = new FormGroup({
    // Required validation for first name
    productname: new FormControl('', [Validators.required]), 
    productdescription: new FormControl('', [Validators.required]), 
    productprice: new FormControl('', [Validators.required]), 
    productimage: new FormControl(''), 
    categoryname: new FormControl(''), 
     });
     updateForm: FormGroup = new FormGroup({
      // Required validation for first name
      productid:new FormControl(''),
      productname: new FormControl('', [Validators.required]), 
      productdescription: new FormControl('', [Validators.required]), 
      productprice: new FormControl('', [Validators.required]), 
      productimage: new FormControl(''), 
      categoryname: new FormControl(''), 
       });

  @ViewChild('productDialog') productDialog!:TemplateRef<any>
  @ViewChild('deleteproductDialog') deleteproductDialog!:TemplateRef<any>
  @ViewChild('updateproductDialog') updateproductDialog!:TemplateRef<any>
  opendialog(){
    this.dialog.open(this.productDialog);
  }
  UploadImage(file:any)
  {
  if(file.length==0)
  return ; 
  let fileToUpload=<File>file[0];
  const formData=new FormData();
  formData.append('file',fileToUpload,fileToUpload.name);
  debugger
  this.admin.uploadAttachment3(formData);
  }
  closedialog(){
    this.dialog.closeAll();
  }
  createproduct(){
    console.log(this.createForm.value);
    this.admin.createproduct(this.createForm.value);
  }

  openDeleteDailog(id: number) {
    const dialogRef = this.dialog.open(this.deleteproductDialog);
    dialogRef.afterClosed().subscribe((result) => {
    if (result != undefined) {
    if (result == 'yes')
    this.admin.deleteproduct(id);
    else if (result == 'no')
    console.log('Thank you'); } }) }

    previousData:any={} ;
    openUpdateDailog(Obj:any){
    this.previousData={
      productid:Obj.productid,
      productname:Obj. productname,
      productdescription:Obj. productdescription, 
      productprice:Obj.productprice, 
      productimage:Obj.productimage, 
      categoryname:Obj.categoryname, 
     }
     console.log(this.previousData);
     this.updateForm.controls['productid'].setValue(this.previousData. productid);
     this.dialog.open(this.updateproductDialog);
     }
     updatetheproduct(){
      
      this.admin.updateproduct(this.previousData.productid,this.updateForm.value);
    }
}

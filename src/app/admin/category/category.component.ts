import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  constructor(public admin:AdminService,public dialog:MatDialog){}
  ngOnInit(): void {
    this.admin.getAllcategory();
  } 
 
  @ViewChild('CategoryDialog') CategoryDialog!:TemplateRef<any>
  @ViewChild('deletecategoryDialog') deletecategoryDialog!:TemplateRef<any>
  @ViewChild('updatecategoryDialog') updatecategoryDialog!:TemplateRef<any>
  
  createForm: FormGroup = new FormGroup({
 // Required validation for first name
    categoryname: new FormControl('', [Validators.required]), 
    categoryimage: new FormControl('', [Validators.required]), 
  });
  updateForm: FormGroup = new FormGroup({
    // Required validation for first name
       categoryid:new FormControl(''),
       categoryname: new FormControl('', [Validators.required]), 
       categoryimage: new FormControl('', [Validators.required]), 
     });
  
  UploadImage(file:any)
  {
  if(file.length==0)
  return ; 
  let fileToUpload=<File>file[0];
  const formData=new FormData();
  formData.append('file',fileToUpload,fileToUpload.name);
  debugger
  this.admin.uploadAttachment2(formData);
  }
  previousData:any={} ;
openUpdateDailog(Obj:any){
this.previousData={
  categoryid:Obj.categoryid,
  categoryname:Obj. categoryname, 
  categoryimage:Obj.categoryimage, 
 }
 console.log(this.previousData);
 this.updateForm.controls['categoryid'].setValue(this.previousData.categoryid);
 this.dialog.open(this.updatecategoryDialog);
 }
  openDeleteDailog(id: number) {
    const dialogRef = this.dialog.open(this.deletecategoryDialog);
    dialogRef.afterClosed().subscribe((result) => {
    if (result != undefined) {
    if (result == 'yes')
    this.admin.deletecategory(id);
    else if (result == 'no')
    console.log('Thank you'); } }) }
    opendialog(){
      this.dialog.open(this.CategoryDialog);
    }
  
    closedialog(){
      this.dialog.closeAll();
    }
    crcategory(){
      this.admin.createcategory(this.createForm.value);
    }
    updatethecategory(){
      this.previousData.categoryid=this.updateForm.get('categoryid')?.value;
      this.previousData.categoryname=this.updateForm.get('categoryname')?.value;
      this.admin.updatecategory(this.previousData. categoryid,this.previousData);
    }
    
  





}




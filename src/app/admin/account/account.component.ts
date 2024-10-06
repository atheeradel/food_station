import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  constructor(public admin:AdminService,public dialog:MatDialog){}
  ngOnInit(): void {
    this.admin.getadmin();
    
  }
  @ViewChild('accountDialog') accountDialog!:TemplateRef<any>

updateForm: FormGroup = new FormGroup({
  adminid:new FormControl(''),
  firstname: new FormControl('', [Validators.required]), // Required validation for first name
  lastname: new FormControl('', [Validators.required]), // Required validation for last name
  phonenumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]), // Required and length of 10 validation for phone number
  username: new FormControl('', [Validators.required]), // Required validation for username
  email:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required])
});

previousData:any={} ;
openUpdateDailog(Obj:any){
this.previousData={
adminid:Obj.adminid,
firstname:Obj.firstname, 
lastname:Obj.lastname, 
phonenumber:Obj.phonenumber,
username:Obj.username,
email:Obj.email,
password:Obj.password }
 console.log(this.previousData);
 this.updateForm.controls['adminid'].setValue(this.previousData.adminid);
 this.dialog.open(this.accountDialog);
 }
 updateprofile(){
  this.previousData.email=this.updateForm.get('email')?.value;
  this.previousData.password=this.updateForm.get('password')?.value;
  this.admin.UpdateUser(this.previousData.adminid,this.previousData);
 }
}

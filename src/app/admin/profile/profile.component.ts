import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AdminModule } from '../admin.module';
import { AdminService } from 'src/app/services/admin.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
constructor(public admin:AdminService,public dialog:MatDialog){}
ngOnInit(): void {
  this.admin.getadmin();
  
}
@ViewChild('profileDialog') profileDialog!:TemplateRef<any>

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
 this.dialog.open(this.profileDialog);
 }
 updateprofile(){
  this.previousData.firstname=this.updateForm.get('firstname')?.value;
  this.previousData.lastname=this.updateForm.get('lastname')?.value;
  this.previousData.phonenumber=this.updateForm.get('phonenumber')?.value;
  this.previousData.username=this.updateForm.get('username')?.value;
  this.admin.UpdateUser(this.previousData.adminid,this.previousData);
 }
 
  
}


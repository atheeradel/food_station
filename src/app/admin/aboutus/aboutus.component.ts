import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit{
constructor(public admin:AdminService,public dialog:MatDialog){}
ngOnInit(): void {
  this.admin.getaboutus();
}
@ViewChild('CreateDialog') CreateDialog!:TemplateRef<any>
@ViewChild('deleteDialog') deleteDialog!:TemplateRef<any>
@ViewChild('updateDialog') updateDialog!:TemplateRef<any>

createForm: FormGroup = new FormGroup({
 
  aboutustitle: new FormControl('', [Validators.required]), // Required validation for first name
  aboutusdes: new FormControl('', [Validators.required]), // Required validation for last name
  aboutusimage: new FormControl('', [Validators.required]), // Required validation for username
});
updateForm: FormGroup = new FormGroup({
  aboutusid: new FormControl(''),
  aboutustitle: new FormControl('', [Validators.required]), // Required validation for first name
  aboutusdes: new FormControl('', [Validators.required]), // Required validation for last name
  aboutusimage: new FormControl('', [Validators.required]), // Required validation for username
});
UploadImage(file:any)
{
if(file.length==0)
return ; 
let fileToUpload=<File>file[0];
const formData=new FormData();
formData.append('file',fileToUpload,fileToUpload.name);
debugger
this.admin.uploadAttachment(formData);
}

previousData:any={} ;
openUpdateDailog(Obj:any){
this.previousData={
  aboutusid:Obj.aboutusid,
  aboutustitle:Obj.aboutustitle, 
  aboutusdes:Obj.aboutusdes, 
  aboutusimage:Obj.aboutusimage,
 }
 console.log(this.previousData);
 this.updateForm.controls['aboutusid'].setValue(this.previousData.aboutusid);
 this.dialog.open(this.updateDialog);
 }
 openDeleteDailog(id: number) {
  const dialogRef = this.dialog.open(this.deleteDialog);
  dialogRef.afterClosed().subscribe((result) => {
  if (result != undefined) {
  if (result == 'yes')
  this.admin.deleteabout(id);
  else if (result == 'no')
  console.log('Thank you'); } }) }

  opendialog(){
    this.dialog.open(this.CreateDialog);
  }

  closedialog(){
    this.dialog.closeAll();
  }
  createAbout(){
    this.admin.createabout(this.createForm.value);
  }
  updateAbout(){
    this.admin.updateaboutus(this.previousData.aboutusid,this.previousData);
  }

}

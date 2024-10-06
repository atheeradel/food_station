import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-menue',
  templateUrl: './menue.component.html',
  styleUrls: ['./menue.component.css']
})
export class MenueComponent implements OnInit {
constructor(public admin:AdminService,public dialog:MatDialog){}
ngOnInit(): void {
  this.admin.getAllproduct();
  this.admin.getfilterTestimonal();
}
@ViewChild('dialogTemplate') dialogTemplate!: TemplateRef<any>;
CreateForm: FormGroup = new FormGroup({
 
  testimonaldescription: new FormControl('', [Validators.required]), // Required validation for first name
  testimonalstate: new FormControl(''), // Required validation for last name
 
});
opinion:any='';


closeDialog(): void {
  this.dialog.closeAll();
}
submitOpinion(): void {
  console.log(this.CreateForm.value);
this.admin.createstimonal(this.CreateForm.value);
  this.closeDialog();
}
opendialog(){
  this.dialog.open(this.dialogTemplate);
}
}

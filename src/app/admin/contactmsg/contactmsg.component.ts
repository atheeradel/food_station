import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-contactmsg',
  templateUrl: './contactmsg.component.html',
  styleUrls: ['./contactmsg.component.css']
})
export class ContactmsgComponent implements OnInit {
constructor(public admin:AdminService){}
ngOnInit(): void {
  this.admin.getcontact();
}
}

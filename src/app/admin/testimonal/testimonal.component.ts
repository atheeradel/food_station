import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-testimonal',
  templateUrl: './testimonal.component.html',
  styleUrls: ['./testimonal.component.css']
})
export class TestimonalComponent implements OnInit {
constructor(public admin:AdminService){}
ngOnInit(): void {
  this.admin.getTestimonal();
}
getTestState(testState: number): string {
  if (testState === 0) {
    return 'Pending';
  } else if (testState === 1) {
    return 'Accepted';
  } else if (testState === 2) {
    return 'Rejected';
  }
  return '';
}
data:any=[];
updatestate(test:any,i:number){
this.data={
  testimonalid:test.testimonalid,
  testimonaldescription:test.testimonaldescription,
  testimonalstate:i
}
this.admin.Updatetest(this.data.testimonalid,this.data);

}
}

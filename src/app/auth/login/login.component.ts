import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public router: Router, public auth: 
    AuthServiceService, private spinner: NgxSpinnerService) { }
  email: FormControl = new FormControl('Ex@example.com', 
    [Validators.required, Validators.email]);
    password: FormControl = new FormControl('********'
    , 
    [Validators.required, Validators.minLength(8)]);
    Login() {
      debugger
      console.log(this.email.value);
      console.log(this.password.value);
     
      this.auth.submit(this.email, this.password); }
      
    
}

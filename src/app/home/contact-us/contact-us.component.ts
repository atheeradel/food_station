import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactForm: FormGroup = this.fb.group({});


  constructor(
    private fb: FormBuilder, 
    private adminService: AdminService,
    private toastr: ToastrService
  ) {
    this.createForm();
  }

  // Step 3: Create the Form Group
  createForm() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  // Step 4: Handle Form Submission
  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      // Call the createcontact method to send data to API
      this.adminService.createcontact(formData).subscribe(
        (response: any) => {
          this.toastr.success('Your message has been sent successfully');
          this.contactForm.reset();  // Reset form after successful submission
        },
        (error: any) => {
          this.toastr.error('Something went wrong!');
          console.log(error);
        }
      );
    }}
}

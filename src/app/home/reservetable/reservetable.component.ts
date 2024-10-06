import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reservetable',
  templateUrl: './reservetable.component.html',
  styleUrls: ['./reservetable.component.css']
})
export class ReservetableComponent {

  today: string;
  selectedDate: string | undefined;
  duration: number | undefined;
  availableSlots: any[] = [];
  totalPrice: number = 0;
  selectedTimeSlot: any;

  constructor(private http: HttpClient,public toaster :ToastrService) {
    // Set today's date as the minimum for reservation
    const date = new Date();
    this.today = date.toISOString().split('T')[0];
  }

  // Fetch available time slots based on selected date and duration
  fetchAvailableSlots() {
    if (this.selectedDate && this.duration) {
      this.http.get(`https://localhost:7083/api/Reservations/available-slots?reservationDate=${this.selectedDate}&durationInHours=${this.duration}`)
        .subscribe((slots: any) => {
          this.availableSlots = slots;
        });
    }
  }

  // Update the price based on the selected time slot
  updatePrice() {
    if (this.selectedTimeSlot) {
      this.totalPrice = this.selectedTimeSlot.price;
    }
  }

  // Book table by sending the reservation details to the API
  bookTable(form: any) {
    // Ensure the selectedDate and time are valid strings
    if (!this.selectedDate || !this.selectedTimeSlot || !this.selectedTimeSlot.startTime) {
      console.error("Invalid date or time selected");
      alert("Please select a valid date and time slot.");
      return;
    }
  
    // Convert startTime from "08:00 AM" to "08:00" (24-hour format)
    const timeParts = this.selectedTimeSlot.startTime.split(' ');
    let timeIn24HourFormat = timeParts[0]; // Start with the time part (e.g., "08:00")
    
    if (timeParts.length === 2) {
      const [hours, minutes] = timeIn24HourFormat.split(':');
      if (timeParts[1] === 'PM' && hours !== '12') {
        timeIn24HourFormat = `${+hours + 12}:${minutes}`; // Convert PM hour to 24-hour format
      } else if (timeParts[1] === 'AM' && hours === '12') {
        timeIn24HourFormat = `00:${minutes}`; // Convert 12 AM to 00
      }
    }
  
    // Combine the selected date and formatted time into a valid Date object
    const selectedDateTimeString = `${this.selectedDate}T${timeIn24HourFormat}:00`;
    const selectedDateTime = new Date(selectedDateTimeString);
  
    // Check if the Date object is valid
    if (isNaN(selectedDateTime.getTime())) {
      console.error("Invalid date or time value:", selectedDateTimeString);
      alert("Invalid date or time value.");
      return;
    }
  
    // Format both reservationDate and startTime as ISO strings
    const reservationDateISO = selectedDateTime.toISOString();  // "2024-09-26T03:06:50.454Z"
    const startTimeISO = selectedDateTime.toISOString();        // Same as above
  
    // Create the reservation object as required by the API
    const reservationDetails = {
      id: 0,  // ID is auto-generated, but it's still expected in the request
      reservationdate: reservationDateISO,   // ISO string for the reservation date
      starttime: startTimeISO,               // ISO string for the start time
      duration: this.duration,                // Duration in hours
      price: this.totalPrice,                 // Total price calculated
      customername: form.value.customerName,  // Customer's name
      customeremail: form.value.customerEmail  // Customer's email
    };
  
    // Log reservation details to verify
    console.log('Sending reservation details:', reservationDetails);
  
    // Send reservation details to the API via POST request
    this.http.post('https://localhost:7083/api/Reservations', reservationDetails)
      .subscribe({
        next: (response) => {
          console.log('Reservation created successfully Check your Email Plese', response);
          this.toaster.success('Reservation created successfully Check your Email Plese');
          this.sendEmail(reservationDetails.customeremail);
        },
        error: (error) => {
          console.error('Error creating reservation:', error);
          if (error.error.errors) {
            this.toaster.error('Validation error: ' + JSON.stringify(error.error.errors));
          } else {
           this.toaster.error('There was an error creating the reservation. Please try again.');
          }
        }
      });
      
      
  }
  sendEmail(email: string) {
    // Create the correct payload format as expected by the API
    const emailPayload = {
        email: email
    };

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // Send POST request with the email payload
    this.http.post('https://localhost:7083/api/Email/send', emailPayload, { headers })
      .subscribe({
        next: (response: any) => {
            console.log('Email sent successfully!', response);
            this.toaster.success(response.message); // Access the message from the response
        },
        error: (error) => {
            console.error('Error sending email:', error);
            this.toaster.error('There was an error sending the email.');
        }
      });
}

  
  

   
  
  
  
  
}

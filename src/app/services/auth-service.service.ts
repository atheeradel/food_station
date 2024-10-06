import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { jwtDecode } from "jwt-decode";
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient, private router: Router, 
              private toastr: ToastrService) { }

              submit(email: any, password: any): Observable<string> {
                const body = {
                  Useremail: email.value.toString(),
                  Password: password.value.toString()
                };
            
                const headerDirc = {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                };
            
                const requestOptions = {
                  headers: new HttpHeaders(headerDirc)
                };
            
                // Return observable and handle the token
                return this.http.post('https://localhost:7083/api/Login', body, requestOptions).pipe(
                  map((resp: any) => {
                    // Process the token
                    const token = resp.token;
                    if (!token) {
                      throw new Error("Token not found in the response");
                    }
                    
                    // Store the token and decoded data in localStorage
                    localStorage.setItem('token', token);
                    const data: any = jwtDecode(token);
                    localStorage.setItem('user', JSON.stringify(data));
            
                    // Handle navigation based on user data
                    if (data.UserId === "1") {
                      this.toastr.success('Welcome On Admin Dashboard');
                      this.router.navigate(['/admin/profile']);
                    }
                    return data; // Return the decoded data
                  }),
                  catchError(err => {
                    // Handle errors
                    this.toastr.error('Something went wrong!!');
                    this.toastr.error(err.message);
                    return throwError(err); // Rethrow the error to handle it elsewhere if needed
                  })
                );
              }
}

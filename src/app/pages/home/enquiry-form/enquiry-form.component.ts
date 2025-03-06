import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrl: './enquiry-form.component.css',
})
export class EnquiryFormComponent {
  name: string = '';
  email: string = '';
  serviceType: string = '';
  message: string = '';
  errors:string[]=[];

  // Hardcoded Service Titles (from API)
  serviceTypes: string[] = [
    'Web Development',
    'Market Analysis',
    'Digital Marketing',
    'Film &  Webinar',
    'Inbound &  Content Marketing',
    'Branding and Communication',
  ];

  constructor(private api:ApiService){

  }

  submitForm() {
    this.errors=[];
    let emailpattern = /^[a-zA-Z0-9\._]+@[a-zA-Z]+\.[a-zA-z]{2,4}$/;
    if(!this.name || this.name.length<3){
      this.errors.push("name should atleast three characters long")
    }
    if(!this.email || !emailpattern.test(this.email)){
      this.errors.push("invalid email")
    }
    if(!this.serviceType || this.serviceType.length==0){
      this.errors.push("please select a service type")
    }
    if(!this.message || this.message.length<10){
      this.errors.push("Message should be atleast 10 characters long")
    }
    if(this.errors.length == 0){
      this.api.addEnquiry({
        name:this.name,
        email:this.email,
        serviceType: this.serviceType,
        message:this.message
      }).subscribe({
        next:(response)=>{
                console.log("enquiry form response", response)
                  this.name = '';
                  this.email = '';
                  this.serviceType = '';
                  this.message = '';
                  alert('Enquiry Submitted Successfully');	
                
        },
        error:(error) =>{
          alert("something went wrong. please try again")
        }
      })
    }

  }
}

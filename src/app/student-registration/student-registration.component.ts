import { UserServiceService } from './../user-service.service';
import { Component, OnInit } from '@angular/core';
import {Stureg} from "../stureg1";
import {NgForm} from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {

  stureg :Stureg;
  message:any;
  constructor(private service:UserServiceService,private route:Router) { }

  ngOnInit(): void {
    this.stureg=new Stureg();
  }
async studentregisterNow(){
 this.message =this.service.StudRegistration(this.stureg);


if(this.message==null)
this.route.navigate(['/successful-student-registration']);
else
alert('Registration failure');

  }

}

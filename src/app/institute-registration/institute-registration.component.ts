import { UserServiceService } from './../user-service.service';
import { Component, OnInit } from '@angular/core';
import {Instreg} from "../instreg";

import {NgForm} from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-institute-registration',
  templateUrl: './institute-registration.component.html',
  styleUrls: ['./institute-registration.component.css']
})
export class InstituteRegistrationComponent implements OnInit {

  instreg :Instreg;
  message:any;
  constructor(private service:UserServiceService,private route:Router) { }

  ngOnInit(): void {
    this.instreg=new Instreg();
  }
async registerNow(){
 this.message =this.service.doRegistration(this.instreg);
await sessionStorage.setItem("instreg",JSON.stringify(this.instreg));

if(this.message==null)
this.route.navigate(['/successful-form-submission']);
else
alert('Registration failure');
}
}

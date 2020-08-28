import { Component, OnInit } from '@angular/core';
import {ApplyForScholarship} from "../applyforscholarship";
import { UserServiceService } from './../user-service.service';
import {NgForm} from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply-for-scholarship',
  templateUrl: './apply-for-scholarship.component.html',
  styleUrls: ['./apply-for-scholarship.component.css']
})
export class ApplyForScholarshipComponent implements OnInit {

  applyforscholarship :ApplyForScholarship;
  message:any;
  constructor(private service: UserServiceService,private route:Router) { }

  ngOnInit(): void {
    this.applyforscholarship=new ApplyForScholarship();
  }
async ApplyNow(){
  alert(this.applyforscholarship);
 this.message =this.service.applyRegistration(this.applyforscholarship);
await sessionStorage.setItem("instreg",JSON.stringify(this.applyforscholarship));

if(this.message==null)
this.route.navigate(['/institute-login']);
else
alert('Registration failure');
}
}

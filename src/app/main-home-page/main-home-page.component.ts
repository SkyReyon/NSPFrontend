import { StdLogin } from './stdlogin';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";
import { Subscription } from 'rxjs';
import { UserServiceService } from '../user-service.service';



@Component({
  selector: 'app-main-home-page',
  templateUrl: './main-home-page.component.html',
  styleUrls: ['./main-home-page.component.css']
})
export class MainHomePageComponent implements OnInit {

  message:any;
  stud:StdLogin;

  private subscription: Subscription;


  constructor(private service: UserServiceService,private router:Router) { }

  ngOnInit() {this.stud=new StdLogin()
             
  }

  studentauthenticate(){
    this.service.studlog(this.stud).subscribe((data: String) => {
     
      this.message = data;
      alert("Successfull");
this.router.navigate(['student-home-page'])

}, (err) => {
console.log(err);
alert("fail");

        
 this.router.navigate(['main-home-page'])
});
  }

}

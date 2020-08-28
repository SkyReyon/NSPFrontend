import { NodLogin } from './../nodallogin';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";
import { Subscription } from 'rxjs';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-nm-login',
  templateUrl: './nm-login.component.html',
  styleUrls: ['./nm-login.component.css']
})
export class NmLoginComponent implements OnInit {

  message:any;
  nodlog:NodLogin;

  private subscription: Subscription;

  constructor(private service: UserServiceService,private router:Router) { }

  ngOnInit() {this.nodlog=new NodLogin()}

  nodalauthenticate(){
    this.service.nodallog(this.nodlog).subscribe((data: String) => {
     
      this.message = data;
      alert("Successfull");
this.router.navigate(['nm-home-page'])

}, (err) => {
//console.log(err);
alert("fail");
        
 this.router.navigate(['nm-login'])
});
  }

}

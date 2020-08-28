import { UserServiceService } from './../user-service.service';
import { Component, OnInit } from '@angular/core';
import { Login } from '../loginClass';
import { Router, NavigationExtras } from "@angular/router";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-institute-login',
  templateUrl: './institute-login.component.html',
  styleUrls: ['./institute-login.component.css']
})
export class InstituteLoginComponent implements OnInit{

 
  message:any;
  login:Login;
  
  private subscription: Subscription;

  constructor(private service: UserServiceService,private router:Router) { 

   
  }


  ngOnInit() { this.login=new Login()}
authenticate(){
  this.service.loginadmin(this.login).subscribe((data: String) => {
 //now u have to route to new page by comparing data

this.message = data;
alert("Successfull");
this.router.navigate(['institute-home-page'])

}, (err) => {
//console.log(err);
alert("fail");
        
          this.router.navigate(['institute-login'])
});
  // "understand the wiring "

  }
}
    // subscribe will read the latest category vale
//this.router.paramMap.subscribe((map: ParamMap) => {
//let category = .get("category");//programming or business or scientific

//data =button.html.angulatts.angularservice.javarestapi.javaservier.dao.table

//this.login=new Login();


 /* 
  loginadmin()
  {
    let adminlogin=new Login()
    adminlogin.email=this.email
    adminlogin.password=this.password
   
   
              
  this.service.loginadmin(adminlogin).subscribe(msg:any)=>
      
    {

        this.message=msg;
        if(user.status== 'null')
        {
          console.log(user)
          alert("New User Registered !!");
          this.router.navigate(['nstitute-home-page'])
        }
        else
        {
          alert("User Already Exists !!");
        }
      }

   

       
      )
  
   */
  


     /*   if(user.status=='SUCCESS')
        {
          let adminName= user.adminNameFirst;
          let adminId= user.adminId;

          sessionStorage.setItem('adminName', adminName)
          sessionStorage.setItem('adminId', adminId)
          this.router.navigate(['institute-home-page'])
        }
        else
        {
          alert(user.status)
          this.message=user.message
          this.router.navigate(['institute-login'])
        }*/
     
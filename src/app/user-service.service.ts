import { NodLogin } from './nodallogin';
import { StdLogin } from './main-home-page/stdlogin';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from "./loginClass";
import { HttpClient } from "@angular/common/http";
import { Instreg } from './instreg';
import { Stureg } from './stureg1';
import { NodDash } from './nodaldash';
import {ApplyForScholarship} from "./applyforscholarship";




@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  response:any;


  constructor(private http: HttpClient) { }


loginadmin(adminlogin:Login):Observable<any>
{


  return this.http.post<Login>("http://localhost:8085/institute-authenticate",adminlogin)

 
}

nodallog(nodal:NodLogin)
{


  return this.http.post("http://localhost:8085/nodal-authenticate",nodal,{responseType:'text'})

 
}

public StudRegistration(stureg:Stureg)
{
  this.http.post<Stureg>("http://localhost:8085/register/",stureg,{ responseType: 'text' as 'json' }).subscribe((response)=>{
    this.response=response;
    console.log(this.response);
  })
return this.response;

}

public doRegistration(instreg:Instreg)
{
  this.http.post<Instreg>("http://localhost:8085/registerInst/",instreg).subscribe((response)=>{
    this.response=response;
    console.log(this.response);
  })
return this.response;

}

public applyRegistration(applyforscholarship:ApplyForScholarship)
{
  this.http.post<ApplyForScholarship>("http://localhost:8085/application/",applyforscholarship).subscribe((response)=>{
    this.response=response;
    console.log(this.response);
  })
return this.response;

}


studlog(studlogin:StdLogin):Observable<any>
{

  alert(studlogin.aadharNo);
  alert(studlogin.password);
  return this.http.post<StdLogin>("http://localhost:8085/studentlogin",studlogin)

}

Ndash(inst: NodDash): Promise<NodDash> {
  alert(inst.instCode);
  return this.http.get<NodDash>("http://localhost:8085/nodal-login" + inst).toPromise();
}





}

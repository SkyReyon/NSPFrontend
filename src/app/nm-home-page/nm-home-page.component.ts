import { UserServiceService } from './../user-service.service';
import { NodDash } from './../nodaldash';

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-nm-home-page',
  templateUrl: './nm-home-page.component.html',
  styleUrls: ['./nm-home-page.component.css']
})
export class NmHomePageComponent implements OnInit {

  nd:NodDash;
  message:any;

  private subscription: Subscription;

  constructor(private service: UserServiceService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit() {this.nd=new NodDash()
    this.route.paramMap.subscribe((map: ParamMap) => {
      let instCode = +map.get("instCode");
      this.service.Ndash(this.nd)
      .then((data: NodDash) => {
          this.nd = data;
      }, (err) => {
          console.log(err);
      })
  })
               
  }
 



}

import { getLocaleDateFormat } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

currentUserName:any;
currentUserSalutation:any;
date:any;
  constructor(private ds:DataService , private router:Router) { 
    this.date= new Date();
  }

  ngOnInit(): void {
    this.date= new Date();
// console.log(this.datas);
this.getUserDetails();
  
   
  }
getUserDetails(){
  this.currentUserName= localStorage.getItem("username");
  this.currentUserSalutation=localStorage.getItem("salutation");

}
route(){
this.router.navigate(['home/user-request'])
}
route1(){
  this.router.navigate(['home'])
}

}

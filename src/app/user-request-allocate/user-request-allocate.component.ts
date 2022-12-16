import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { DataService } from '../data.service';
import { ReleaseUser } from '../release-user';
import { Software } from '../software';

@Component({
  selector: 'app-user-request-allocate',
  templateUrl: './user-request-allocate.component.html',
  styleUrls: ['./user-request-allocate.component.css']
})
export class UserRequestAllocateComponent implements OnInit {

  softwares!: Software[];
  userData!: Software[];
  userRequestId!: number;
  licenseNumber!: string;
  softwareData: any;
  softwareUserData!: ReleaseUser[];
  manufacturerName!: string;
  stsCount!: number;
  seleniumCount!: number;
  office365Count!: number;
  selectedSoftwares!: Software[];

  categories = [" ", "Microsoft", "VMware", "ThoughtWorks"]
  constructor(private ds: DataService, private router: Router, private toast: NgToastService) { }
  ngOnInit(): void {
    this.ds.getAllRequestSoftwares().subscribe({
      next: (result: Software[]) => {
        this.softwares = result
        console.log(this.softwares);
        this.stsCount = this.softwares.filter((n) => n.softwareVersion == "3.9.9").length;
        this.office365Count = this.softwares.filter((n) => n.softwareVersion == "2211").length;
        this.seleniumCount = this.softwares.filter((n) => n.softwareVersion == "4.6.6").length;
        console.log(this.stsCount);

        this.userRequestId = JSON.parse(localStorage.getItem("requestId") || '');

        this.ds.getSoftwareRequestUser(this.userRequestId).subscribe((res) => {
          this.softwareUserData = res;
          console.log(this.softwareUserData);
        }, (err) => {
          console.log(err);
        })
      }
    })
  }
  allocateSoftware() {
    if (this.licenseNumber) {
      this.ds.editRequestById(this.userRequestId, this.softwareUserData).subscribe((res) => {
        console.log(res);
      }, (err) => {
        console.log(err);
      })
      this.ds.allocateSoftware(this.licenseNumber, this.softwareData).subscribe((res) => {
        console.log(res);
        this.success();
      }, (err) => {

      })
      this.router.navigateByUrl("home/user-request")
    }
    else {
      alert("select license number")
    }
  }
  checkLicenseNumber(event: any) {
    this.licenseNumber = event.target.value
    console.log(event.target.value);
    for (let i = 0; i < this.softwares.length; i++) {
      if (event.target.value == this.softwares[i].licenseNumber) {
        this.softwareData = this.softwares[i];
        console.log(this.softwareData);
      } else {
        console.log("error");
      }
    }


  }
  checkManufacturerName(event: any) {


    this.selectedSoftwares = this.softwares.filter((n) => n.manufacturerName == event.target.value);
    console.log(this.softwares);



  }
  routeBack() {
    this.router.navigateByUrl("/home/user-request")
  }
  success() {
    this.toast.success({ detail: 'Request Approved', summary: '', position: 'tr', duration: 1000 })
  }
}






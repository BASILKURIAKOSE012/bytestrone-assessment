import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { ReleaseUser } from '../release-user';
import { Software } from '../software';

@Component({
  selector: 'app-user-request-release',
  templateUrl: './user-request-release.component.html',
  styleUrls: ['./user-request-release.component.css']
})
export class UserRequestReleaseComponent implements OnInit {
  users!: ReleaseUser[];
  softwares!: Software[];
  userData!: Software[];
  userRequestId!: number;
  licenseNumber!: string;
  softwareData: any;
  softwareUserData!: ReleaseUser;
  manufacturerName!: string;
  stsCount!: number;
  seleniumCount!: number;
  office365Count!: number;
  selectedSoftware!: Software[];
  categories = [" ", "Microsoft", "VMware", "ThoughtWorks"]
  constructor(private ds: DataService, private router: Router) { }

  ngOnInit(): void {
    this.ds.getAllReleaseSoftwares().subscribe({
      next: (result: Software[]) => {
        this.softwares = result
        console.log(this.softwares);
        this.stsCount = this.softwares.filter((n) => n.softwareVersion == "3.9.9").length;
        this.office365Count = this.softwares.filter((n) => n.softwareVersion == "2211").length;
        this.seleniumCount = this.softwares.filter((n) => n.softwareVersion == "4.6.6").length;
        console.log(this.stsCount);

        this.userRequestId = JSON.parse(localStorage.getItem("requestId") || '');


        this.ds.getSoftwareReleaseUser(this.userRequestId).subscribe((res) => {
          this.softwareUserData = res;
          console.log(res);
          this.selectedSoftwares(this.softwareUserData.licenseNumber);

        }, (err) => {
          console.log(err);
        })
      }
    })

  }
  releaseSoftware() {
    if (this.licenseNumber) {
      console.log(this.userRequestId);
      console.log(this.softwareUserData);


      this.ds.editUserReleaseById(this.userRequestId, this.softwareUserData).subscribe((res) => {
        console.log(res);
      }, (err) => {
        console.log(err);
      })

      console.log(this.licenseNumber);
      console.log(this.softwareData);


      this.ds.releaseSoftware(this.licenseNumber, this.softwareData).subscribe((res) => {
        console.log(res);

      }, (err) => {
        console.log(err);

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
  }
  selectedSoftwares(data: any) {
    console.log("hai");
    this.selectedSoftware = this.softwares.filter((n) => n.licenseNumber == data);
    console.log(this.selectedSoftware);

  }

}

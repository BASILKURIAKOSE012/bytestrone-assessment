import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { ReleaseUser } from '../release-user';
import { RequestUser } from '../request-user';
import { UserRequestAllocateComponent } from '../user-request-allocate/user-request-allocate.component';

@Component({
  selector: 'app-user-request-view',
  templateUrl: './user-request-view.component.html',
  styleUrls: ['./user-request-view.component.css']
})
export class UserRequestViewComponent implements OnInit {

  @ViewChild(UserRequestAllocateComponent)
  child!: UserRequestAllocateComponent;
  constructor(private ds: DataService, private router: Router) { }
  users!: RequestUser[];
  userRelease!: ReleaseUser[];
  show: boolean = true;
  show1: boolean = true;
  countRequestUser!: number;
  countReleaseUser!:number;
  currentPageRequestUser!: number;
  currentPageReleaseUser!: number;
  ngOnInit(): void {


  }

  onTableDataChange(event: number) {
    this.getOpenRequestData(event - 1);
    this.currentPageRequestUser = event;
  }
  onTableDataChange1(event: number) {
    this.getReleaseRequestData(event - 1);
    this.currentPageReleaseUser = event;
  }
  getOpenRequestData(page: number) {
    this.show1 = false;
    this.show = true;
    this.ds.getUserOpenRequestView(page).subscribe({
      next: (result: any) => {
        this.users = result.SoftwareUsers;
        this.countRequestUser = result.totalItems;
        console.log(this.users[0].softwareName);

        this.userRelease = [];

      }
    })

  }
  getReleaseRequestData(page:number) {
    this.show1 = true;
    this.show = false;
    this.ds.getUserReleaseRequestView(page).subscribe({
      next: (result: any) => {
        this.userRelease = result.SoftwareUsers;
        this.countReleaseUser= result.totalItems;


      }
    })
  }

  routeAllocate(requestId: any) {

    localStorage.setItem("requestId", requestId)
    this.router.navigate(['home/user-allocate'])
  }
  routeRelease(requestId: any) {
    localStorage.setItem("requestId", requestId)
    this.router.navigate(['home/user-release'])
  }

}



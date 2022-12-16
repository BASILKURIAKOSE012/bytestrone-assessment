import { Component, OnInit, ViewChild } from '@angular/core'; 7
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { DataService } from '../data.service';
import { HeaderComponent } from '../header/header.component';
import { LoginService } from '../login.service';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  datas!: User;

  constructor(private fb: FormBuilder, private ds: DataService, private router: Router, private loginUser: LoginService, private toast: NgToastService) { }

  ngOnInit(): void {

  }
  loginForm = this.fb.group({
    userid: ['', [Validators.required, Validators.minLength(1)]],
    password: ['', [Validators.required]]
  })

// to check the login credentials

  login() {
    this.user.userId = this.loginForm.value.userid || "";
    this.user.password = this.loginForm.value.password || "";
    if (this.loginForm.valid) {
      this.loginUser.loginUser(this.user).subscribe(data => {
        this.success();
        this.datas = data;
        console.log(this.datas.userName);
        localStorage.setItem('username', this.datas.userName)
        localStorage.setItem('salutation', this.datas.salutation)
        localStorage.setItem('login', "true")
        this.router.navigateByUrl("home")
      }, (err) => this.error1())
      this.loginForm.reset();
    }
    else {
      alert("enter data")
    }
  }

 // login success notification 
  success() {
    this.toast.success({ detail: 'Login Successfull', summary: 'Welcome', position: 'tr', duration: 1000 })
  }
// login failure notification  
  error1() {
    this.toast.error({ detail: 'Invalid Credentials', summary: 'Please enter valid details', position: 'tr', duration: 5000 })
  }
}

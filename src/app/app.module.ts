import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {  HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'
import {Component} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select'
import {MatTableModule} from '@angular/material/table';
import { UserRequestViewComponent } from './user-request-view/user-request-view.component';
import { UserRequestAllocateComponent } from './user-request-allocate/user-request-allocate.component';
import { SoftwareComponent } from './software/software.component';
import { UserRequestReleaseComponent } from './user-request-release/user-request-release.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgToastModule } from 'ng-angular-popup';





// import {  MatPaginatorModule, MatProgressSpinnerModule,  MatSortModule } from "@angular/material";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    ContentComponent,
    HeaderComponent,
    FooterComponent,
    UserRequestViewComponent,
    UserRequestAllocateComponent,
    SoftwareComponent,
    UserRequestReleaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  HttpClientModule,
  BrowserAnimationsModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatTableModule,
  FormsModule,
  NgxPaginationModule,
  NgToastModule

 

  



  // MatProgressSpinnerModule,

  // MatProgressSpinnerModule,
  // MatSortModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

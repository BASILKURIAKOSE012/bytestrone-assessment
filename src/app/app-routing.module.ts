import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { UserRequestAllocateComponent } from './user-request-allocate/user-request-allocate.component';
import { UserRequestReleaseComponent } from './user-request-release/user-request-release.component';
import { UserRequestViewComponent } from './user-request-view/user-request-view.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,canActivate:[AuthGuard],
    children:[ {
      path:'content',
      component:ContentComponent,
      // children:[
      // ]
    },
    {
      path:'user-request',
      component:UserRequestViewComponent
    },
    {
      path:'user-allocate',
      component:UserRequestAllocateComponent
    },
    {
      path:'user-release',
      component:UserRequestReleaseComponent
    }
    
  ]
},
{
    path:'nav',
    component:NavComponent,canActivate:[AuthGuard]
  },
 
  {
    path:'',
    component:LoginComponent
  },
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

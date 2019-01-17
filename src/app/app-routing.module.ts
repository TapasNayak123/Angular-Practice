import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ApperalsComponent } from './apperals/apperals.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FruitsComponent } from './fruits/fruits.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'appereals', component: ApperalsComponent },
      { path: 'electronics', component: ElectronicsComponent },
      { path: 'fruits', component: FruitsComponent }
    ]
  },
  { path:  'dashboard',redirectTo:  '/profile',pathMatch:  'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

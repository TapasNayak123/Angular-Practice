import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginTemplateComponent } from './login-template/login-template.component';
import { DataService } from './service/data-transfer-service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomMaterialModule } from './material-module';
import { ProfileComponent } from './profile/profile.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FruitsComponent } from './fruits/fruits.component';
import { ApperalsComponent } from './apperals/apperals.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { NavigationComponent } from './navigation/navigation.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LoginTemplateComponent,
    DashboardComponent,
    ProfileComponent,
    ToolbarComponent,
    FruitsComponent,
    ApperalsComponent,
    ElectronicsComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CustomMaterialModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
//platformBrowserDynamic().bootstrapModule(AppModule);
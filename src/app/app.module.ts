import { UserServiceService } from './user-service.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplyForScholarshipComponent } from './apply-for-scholarship/apply-for-scholarship.component';
import { InstituteHomePageComponent } from './institute-home-page/institute-home-page.component';
import { InstituteLoginComponent } from './institute-login/institute-login.component';
import { NmHomePageComponent } from './nm-home-page/nm-home-page.component';
import { NmLoginComponent } from './nm-login/nm-login.component';
import { StudentHomePageComponent } from './student-home-page/student-home-page.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { SuccessfulFormSubmissionComponent } from './successful-form-submission/successful-form-submission.component';
import { SuccessfulStudentRegistrationComponent } from './successful-student-registration/successful-student-registration.component';
import { TrackStudentApplicationStatusComponent } from './track-student-application-status/track-student-application-status.component';
import { TrackInstituteApplicationStatusComponent } from './track-institute-application-status/track-institute-application-status.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { UpdateComponent } from './update/update.component';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ForgetPasswordComponent } from './forget-password/forget-password.component'

@NgModule({
  declarations: [
    AppComponent,
    ApplyForScholarshipComponent,
    InstituteHomePageComponent,
    InstituteLoginComponent,
    NmHomePageComponent,
    NmLoginComponent,
    StudentHomePageComponent,
    StudentRegistrationComponent,
    SuccessfulFormSubmissionComponent,
    SuccessfulStudentRegistrationComponent,
    TrackStudentApplicationStatusComponent,
    TrackInstituteApplicationStatusComponent,
    routingComponents,
    AboutUsComponent,
    ContactUsComponent,
    MyProfileComponent,
    UpdateComponent,
    ForgetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ApplyForScholarshipComponent} from './apply-for-scholarship/apply-for-scholarship.component';
import {InstituteHomePageComponent} from './institute-home-page/institute-home-page.component';
import {InstituteLoginComponent} from './institute-login/institute-login.component';
import {InstituteRegistrationComponent} from './institute-registration/institute-registration.component';
import {MainHomePageComponent} from './main-home-page/main-home-page.component';
import {NmHomePageComponent} from './nm-home-page/nm-home-page.component';
import {NmLoginComponent} from './nm-login/nm-login.component';
import {StudentHomePageComponent} from './student-home-page/student-home-page.component';
import {StudentRegistrationComponent} from './student-registration/student-registration.component';
import {SuccessfulFormSubmissionComponent} from './successful-form-submission/successful-form-submission.component';
import {SuccessfulStudentRegistrationComponent} from './successful-student-registration/successful-student-registration.component';
import {TrackInstituteApplicationStatusComponent} from './track-institute-application-status/track-institute-application-status.component';
import {TrackStudentApplicationStatusComponent} from './track-student-application-status/track-student-application-status.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {MyProfileComponent} from './my-profile/my-profile.component';


const routes: Routes = [
{path:'', component:MainHomePageComponent},
{path: 'apply-for-scholarship', component: ApplyForScholarshipComponent},
{path: 'institute-home-page', component: InstituteHomePageComponent},
{path: 'institute-login', component: InstituteLoginComponent},
{path: 'institute-registration', component: InstituteRegistrationComponent},
{path:'main-home-page', component:MainHomePageComponent},
{path: 'nm-home-page', component: NmHomePageComponent},
{path: 'nm-login', component: NmLoginComponent},
{path: 'student-home-page', component: StudentHomePageComponent},
{path: 'student-registration', component: StudentRegistrationComponent},
{path: 'successful-form-submission', component: SuccessfulFormSubmissionComponent},
{path: 'successful-student-registration', component: SuccessfulStudentRegistrationComponent},
{path: 'track-institute-application-status', component: TrackInstituteApplicationStatusComponent},
{path: 'track-student-application-status', component: TrackStudentApplicationStatusComponent},
{path: 'about-us', component:AboutUsComponent},
{path: 'contact-us', component:ContactUsComponent},
{path: 'my-profile',component:MyProfileComponent},
{path: 'forget' , component:ForgetPasswordComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[MainHomePageComponent,ApplyForScholarshipComponent,InstituteHomePageComponent,InstituteLoginComponent,InstituteRegistrationComponent,NmHomePageComponent,NmLoginComponent,
  StudentHomePageComponent,StudentRegistrationComponent,SuccessfulFormSubmissionComponent,SuccessfulStudentRegistrationComponent,
  TrackInstituteApplicationStatusComponent,TrackStudentApplicationStatusComponent,AboutUsComponent,ContactUsComponent]
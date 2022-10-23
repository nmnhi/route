import { CourseResolveService } from './course-resolve.service';
import { CoursesGuardService } from './course-guard.service';
import { CoursesComponent } from './courses/courses.component';
import { Routes, RouterModule, CanDeactivate } from '@angular/router';
import { CourseComponent } from './courses/course/course.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { ErrorComponent } from './error/error.component';
import { CanDeactivateGuardService } from './candeactivate-guard.service';

const appRoute: Routes = [
  { path: '', component: HomeComponent }, //Default app root
  // { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  {
    path: 'Contact',
    canDeactivate: [CanDeactivateGuardService],
    component: ContactComponent,
  },
  {
    path: 'Courses',
    component: CoursesComponent,
    resolve: { courses: CourseResolveService },
  },
  // { path: 'Courses/Course/:id', component: CourseComponent },
  {
    path: 'Courses',
    canActivateChild: [CoursesGuardService],
    children: [{ path: 'Course/:id', component: CourseComponent }],
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

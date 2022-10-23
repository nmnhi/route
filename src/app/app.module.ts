import { CourseResolveService } from './course-resolve.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { CourseComponent } from './courses/course/course.component';
import { FormsModule } from '@angular/forms';
import { CoursesGuardService } from './course-guard.service';
import { AuthService } from './auth.service';
import { CanDeactivateGuardService } from './candeactivate-guard.service';
import { CoursesService } from './Services/courses.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    CoursesComponent,
    AboutComponent,
    ErrorComponent,
    CourseComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    CoursesGuardService,
    AuthService,
    CanDeactivateGuardService,
    CourseResolveService,
    CoursesService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

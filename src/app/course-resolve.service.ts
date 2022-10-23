import { CoursesService } from './Services/courses.service';
import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable()
export class CourseResolveService implements Resolve<any> {
  constructor(private coursesService: CoursesService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.coursesService.getAllCourses().then((data: any) => {
      return data;
    });
  }
}

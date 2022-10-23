import { CoursesService } from './../../Services/courses.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  course: any;
  courseId: any;
  RouteParamObs: any;
  editMode: boolean = false;
  constructor(
    private activateRoute: ActivatedRoute,
    private service: CoursesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.courseId = this.activateRoute.snapshot.paramMap.get('id');
    // // this.courseId = this.activateRoute.snapshot.params['id'];
    // this.course = this.service.courses.find((x) => x.id == this.courseId);

    this.RouteParamObs = this.activateRoute.paramMap.subscribe((param) => {
      this.courseId = param.get('id');
      this.course = this.service.courses.find((x) => x.id == this.courseId);
    });

    this.activateRoute.queryParamMap.subscribe((param) => {
      this.editMode = Boolean(param.get('edit'));
    });
  }
  ngOnDestroy() {
    this.RouteParamObs.unsubscribe();
  }
  appendQueryParam() {
    this.router.navigate(['/Courses/Course', this.courseId], {
      queryParams: { edit: true },
    });
  }
}

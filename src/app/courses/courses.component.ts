import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../Services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute
  ) {}

  courses: {
    id: number;
    name: string;
    author: string;
    duration: number;
    type: string;
    price: number;
    ratings: number;
    image: string;
    description: string;
  }[] = [];

  ngOnInit(): void {
    // this.courses = this.coursesService.courses;
    this.coursesService.getAllCourses().then((data: any) => {
      this.courses = data;
    });

    // this.courses = this.route.snapshot.data['courses'];
  }
}

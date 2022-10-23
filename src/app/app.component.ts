import {
  ActivatedRoute,
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from '@angular/router';
import { Component } from '@angular/core';
import { CoursesService } from './Services/courses.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CoursesService],
})
export class AppComponent {
  title = 'angularRouting';
  displayLoadingIndicator = false;
  constructor(
    private activeRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit() {
    this.activeRoute.fragment.subscribe((value) => {
      // console.log(value);
      this.jumpTo(value);
    });
    this.router.events.subscribe((routeEvent: Event) => {
      if (routeEvent instanceof NavigationStart) {
        this.displayLoadingIndicator = true;
      }
      if (
        routeEvent instanceof NavigationEnd ||
        routeEvent instanceof NavigationCancel ||
        routeEvent instanceof NavigationError
      ) {
        this.displayLoadingIndicator = false;
      }
    });
  }
  jumpTo(section: any) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  login() {
    this.authService.login();
  }
  logout() {
    this.authService.logout();
  }
}

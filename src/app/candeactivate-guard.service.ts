import { Observable } from 'rxjs';
import {
  CanDeactivate,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';

export interface IDeactivateComponent {
  canExit: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuardService
  implements CanDeactivate<IDeactivateComponent>
{
  canDeactivate(
    component: IDeactivateComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ) {
    return component.canExit();
  }
}

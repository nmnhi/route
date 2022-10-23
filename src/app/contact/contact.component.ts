import { IDeactivateComponent } from './../candeactivate-guard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit, IDeactivateComponent {
  fisrtName: string = '';
  lastName: string = '';
  country: string = '';
  subject: string = '';
  constructor() {}

  ngOnInit(): void {}
  canExit() {
    if (this.fisrtName || this.lastName || this.country || this.subject) {
      return confirm(
        'You have unsaved changes. Do you really want to discard these change?'
      );
    } else {
      return true;
    }
  }
}

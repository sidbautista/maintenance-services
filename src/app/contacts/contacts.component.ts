import { Component } from '@angular/core';
import * as WOW from 'wow.js';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
 ngOnInit() {
    // Initialize WOW
    const wow = new (WOW as any)({
      mobile: false,
    });
    wow.init();
  }
}

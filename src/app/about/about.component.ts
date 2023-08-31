import { Component, OnInit } from '@angular/core';
import * as WOW from 'wow.js';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit  {
 ngOnInit() {
    // Initialize WOW
    const wow = new (WOW as any)({
      mobile: false,
    });
    wow.init();
  }
}

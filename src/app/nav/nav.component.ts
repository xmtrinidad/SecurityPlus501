import { Component, OnInit } from '@angular/core';
import { NavService } from '../nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(public navService: NavService) { }

  ngOnInit() {
  }

  /**
   * Scroll to top when nav icon is clicked
   */
  toTop() {
    window.scrollTo(0, 0);
  }

}

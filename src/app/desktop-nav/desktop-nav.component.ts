import { Component, OnInit } from '@angular/core';
import { NavService } from '../nav.service';
import { Section } from '../section';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-desktop-nav',
  templateUrl: './desktop-nav.component.html',
  styleUrls: ['./desktop-nav.component.scss']
})
export class DesktopNavComponent implements OnInit {
  sections: Section[];

  constructor(public navService: NavService) { }

  ngOnInit() {
    this.sections = this.navService.getSections();
  }

  selected(section: Section) {
    this.navService.getSection(section);
  }

}

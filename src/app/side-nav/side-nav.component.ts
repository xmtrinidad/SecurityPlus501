import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NavService } from '../nav.service';
import { Section } from '../section';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  animations: [
    trigger('menuState', [
      state('hide', style({
        left: -768 + 'px'
      })),
      state('show', style({
        left: 0
      })),
      transition('hide <=> show', animate('400ms ease-in-out'))
    ])
  ]
})
export class SideNavComponent implements OnInit {
  sections: Section[];

  constructor(public navService: NavService) { }

  ngOnInit() {
    this.sections = this.navService.getSections();
  }


  /**
   * Hide menu state and go to section
   * Get section clicked
   */
  sectionClicked(s) {
    this.navService.menuState = 'hide';
    this.navService.getSection(s);
  }

  closeMenu() {
    this.navService.menuState = 'hide';
  }

}

import { Injectable, EventEmitter } from '@angular/core';
import { SECTIONS } from './section-data';
import { Section } from './section';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NavService {
  menuState = 'hide';
  sectionChange: EventEmitter<Section> = new EventEmitter();
  currentSection: Section;

  constructor() { }

  /**
   * Get section data from SECTIONS data object
   */
  getSections(): Section[] {
    return SECTIONS;
  }

  getSection(clickedSection) {
    this.currentSection = clickedSection;
    // Emit section information to section component
    this.sectionChange.emit(this.currentSection);
  }

  /**
   * Detect clicks and change menu state to hide/show side nav
   */
  menuClicked() {
    this.menuState = this.menuState === 'hide' ? this.menuState = 'show' : 'hide';
  }

}

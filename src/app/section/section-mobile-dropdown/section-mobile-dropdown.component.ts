import { Component, OnInit, Input } from '@angular/core';
import { SubSection } from '../../sub-section';
import { Section } from '../../section';

@Component({
  selector: 'app-section-mobile-dropdown',
  templateUrl: './section-mobile-dropdown.component.html',
  styleUrls: ['./section-mobile-dropdown.component.scss']
})
export class SectionMobileDropdownComponent implements OnInit {
  @Input() subsection: SubSection;
  // Takes in clicked section to get section color
  @Input() section: Section;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Section } from '../section';
import { NavService } from '../nav.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  section: Section;

  constructor(private navService: NavService) { }

  ngOnInit() {
    this.navService.sectionChange.subscribe(s => this.section = s);
  }

}

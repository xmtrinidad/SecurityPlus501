import { Component, OnInit, Input } from '@angular/core';

interface Link {
  title: string;
  link: string;
}

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.scss']
})
export class SectionListComponent implements OnInit {
  // Takes in bullets and links based on clicked section
  @Input() subsectionBullets: any[];
  @Input() sectionLinks: Link[];

  constructor() { }

  ngOnInit() {
    
  }

}

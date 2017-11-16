import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.scss']
})
export class SectionListComponent implements OnInit {
  @Input() subsectionBullets: any[];

  constructor() { }

  ngOnInit() {
  }

}

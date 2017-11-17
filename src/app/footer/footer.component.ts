import { Component, OnInit } from '@angular/core';

interface Social {
  icon: string;
  color: string;
  link: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  SOCIAL_ICONS: Social[] = [
    { icon: 'fa-envelope', color: '#F44336', link: 'mailto:xmtrinidad@gmail.com'},
    { icon: 'fa-github', color: '#673AB7', link: 'https://github.com/xmtrinidad'},
    { icon: 'fa-codepen', color: '#000000', link: 'https://codepen.io/xmtrinidad/'},
    { icon: 'fa-reddit-alien', color: '#fc3d1b', link: 'https://www.reddit.com/user/xmtrinidad/'},
    { icon: 'fa-stack-overflow', color: '#f0762e', link: 'https://stackoverflow.com/users/8766689/xavier'}
  ];

  constructor() { }

  ngOnInit() {
  }

}

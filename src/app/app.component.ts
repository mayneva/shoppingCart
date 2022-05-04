import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'HomePage', url: '/home', icon: 'home' },
    { title: 'About', url: '/about-us', icon: 'flower' },
    { title: 'Your profile', url: '/your-profile', icon: 'heart' },
    { title: 'Contact', url: '/contact', icon: 'mail' },
    { title: 'Privacy policy', url: '/policy', icon: 'warning' },
    { title: 'Logout', url: '/login', icon: 'log-out' },
  ];
  constructor() {}
}

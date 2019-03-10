import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})

export class HomeHeaderComponent implements OnInit {
  notifications: any[];

  constructor(
    private auth: AuthService
  ) {
    this.notifications = [
      {
        icon: 'i-Speach-Bubble-6',
        title: 'New message',
        badge: '3',
        text: 'Grab a great deal with us\n',
        time: new Date(),
        status: 'primary',
        link: '/sessions/signin'
      },
      {
        icon: 'i-Receipt-3',
        title: 'Your spaceship is ready to pick-up',
        badge: 'hot',
        text: 'Cruiser',
        time: new Date('11/11/2018'),
        status: 'success',
        link: '/sessions/signin'
      },
      {
        icon: 'i-Empty-Box',
        title: 'Wherever you\'re off to, we\'ll find you the ideal spaceship',
        text: 'Corvette',
        time: new Date('11/10/2018'),
        status: 'danger',
        link: '/sessions/signin'
      },
      {
        icon: 'i-Data-Power',
        title: 'SALE NOW ON!\n',
        text: '' +
          'LOCK IN YOUR\n' +
          'RENTAL',
        time: new Date('11/08/2018'),
        status: 'success',
        link: '/sessions/signin'
      },
      {
        icon: 'i-Data-Block',
        title: 'HURRY! OFFER ENDS SOON',
        badge: 'Sale',
        text: '2019',
        time: new Date('11/06/2018'),
        status: 'danger',
        link: '/sessions/signin'
      }
    ];
  }

  ngOnInit() {}

  signout() {
    this.auth.signout();
  }

}

import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuItems:NbMenuItem[] = [
    {
      title: 'Home',
      link: '/dashboard',
      icon: 'home'
    },
    {
      title: 'Test',
      link: '/testboard',
      icon: 'star'
    },
    {
      title: 'User',
      link: '/user',
      icon: 'star'
    },
    {
      title: 'My Marks',
      link: '/studentmarks',
      icon: 'star'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

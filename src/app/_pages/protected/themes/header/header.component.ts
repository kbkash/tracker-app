import { Component, OnInit } from '@angular/core';
import { NbSidebarService, NbMenuService, NbThemeService, NbMediaBreakpointsService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = true;
  user: any;

  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    
  ];

  currentTheme = 'default';

  

  userMenu = [ { title: 'Profile' }, { title: 'Log out' } ];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              // private userService: UserData,
              // private layoutService: LayoutService,
              private breakpointService: NbMediaBreakpointsService) {
  }

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;
    this.user = {
      name:"bikash",
      picture:"assets/user.jpg"
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(!false, 'left');
    // this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

}

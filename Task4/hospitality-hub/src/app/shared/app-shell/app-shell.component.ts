import {Component, OnInit, ViewChild} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {BreakpointObserver} from "@angular/cdk/layout";
import {MatSidenav} from "@angular/material/sidenav";
import {MenuItem} from "../../core/models/menu-item";

@Component({
  selector: 'app-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss']
})
export class AppShellComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile = true;
  isCollapsed = false;
  currentLanguage: string = '';
  isAuthenticated: boolean = false;

  menuItems: MenuItem[] = [];

  constructor(private translateService: TranslateService,
              private observer: BreakpointObserver,
  ) {
    this.menuItems = [
      {
        id: 1,
        name: 'home',
        icon: 'home',
        url: '/',
        parentId: null
      },
      {
        id: 2,
        name: 'users',
        icon: 'user',
        url: '/user',
        parentId: null
      },
      {
        id: 3,
        name: 'roles',
        icon: 'role',
        url: '/roles',
        parentId: null
      }
    ]
  }

  ngOnInit(): void {
    console.log("app-shell")
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      this.isMobile = screenSize.matches;
    });
    this.currentLanguage = localStorage.getItem('language') || 'en';

    this.isUserAuthenticated();
  }


  toggleMenu() {
    if (this.isMobile) {
      this.sidenav.toggle();
      this.isCollapsed = false; // On mobile, the menu can never be collapsed
    } else {
      this.sidenav.open(); // On desktop/tablet, the menu can never be fully closed
      this.isCollapsed = !this.isCollapsed;
    }
  }

  isUserAuthenticated(): boolean {
    this.isAuthenticated = true;
    return true;
  }

  changeLanguage = (lang: string): void => {
    console.log('change language')
    this.currentLanguage = lang;
    this.translateService.use(lang);
    localStorage.setItem('language', lang);
    console.log(lang)
  }

  getCurrentUserName(): string {
    const email = localStorage.getItem('user_email');
    return email ? email : '';
  }

  logout = (): void => {
    localStorage.removeItem('access_token');
    window.location.reload();
  }

}

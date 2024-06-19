import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { BreakpointObserver } from "@angular/cdk/layout";
import { MatSidenav } from "@angular/material/sidenav";
import { MenuItem } from "../../core/models/menu-item";
import { HotelResponse } from "../../api-proxy/models/hotel-response";
import { MenuService } from 'src/app/api-proxy/services';
import { MenuNodeResponse } from 'src/app/api-proxy/models';
import { Observable, Subscription } from 'rxjs';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppShellComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile = true;
  isCollapsed = false;
  currentLanguage: string = '';
  isAuthenticated: boolean = false;

  protected menuItems$!: Observable<MenuNodeResponse[]>;

  protected hotels!: HotelResponse[];
  protected selected: number = -1;

  constructor(
    private dateAdapter: DateAdapter<any>,
    private translateService: TranslateService,
    private readonly menuService: MenuService,
    private observer: BreakpointObserver,
  ) {

  }

  ngOnInit(): void {
    console.log("app-shell")
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      this.isMobile = screenSize.matches;
    });
    this.currentLanguage = localStorage.getItem('language') || 'en';

    if (this.isUserAuthenticated() && (this.menuItems$ === undefined || this.menuItems$ === null)) {
      this.loadMenuItems();
    }
  }

  loadMenuItems() {

    this.menuItems$ = this.menuService.apiMenuMenuNodesGet$Json();
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
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      this.isAuthenticated = false;
      return false;
    }

    const expiration = localStorage.getItem("expires_in");
    const isoLoginTime = localStorage.getItem("login_time");

    if (!expiration || !isoLoginTime) {
      return false;
    }

    const expiresIn = parseInt(expiration);
    const loginTime = new Date(isoLoginTime);
    const now = new Date();
    const diff = now.getTime() - loginTime.getTime();
    const diffInSeconds = diff / 1000;

    if (diffInSeconds > expiresIn) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('expires_in');
      localStorage.removeItem('login_time');
      this.isAuthenticated = false;
      return false;
    }

    this.isAuthenticated = true;

    return true;
  }

  changeLanguage = (lang: string): void => {
    this.currentLanguage = lang;
    this.translateService.use(lang);
    this.dateAdapter.setLocale(lang);
    localStorage.setItem('language', lang);
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

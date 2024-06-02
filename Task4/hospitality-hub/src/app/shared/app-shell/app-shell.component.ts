import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {BreakpointObserver} from "@angular/cdk/layout";
import {MatSidenav} from "@angular/material/sidenav";
import {MenuItem} from "../../core/models/menu-item";
import {HotelResponse} from "../../api-proxy/models/hotel-response";

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

  menuItems: MenuItem[] = [
    {
      id: 1,
      name: 'hotel',
      icon: 'home',
      url: '/hotel',
      parentId: null
    },
    {
      id: 2,
      name: 'room',
      icon: 'room',
      url: '/room',
      parentId: null
    },
    {
      id: 3,
      name: 'users',
      icon: 'user',
      url: '/users',
      parentId: null
    },
    {
      id: 4,
      name: 'roles',
      icon: 'role',
      url: '/users/roles',
      parentId: 3
    }
  ];
  protected hotels!: HotelResponse[];
  protected selected: number = -1;

  constructor(private translateService: TranslateService,
              private observer: BreakpointObserver,
  ) {

  }

  ngOnInit(): void {
    console.log("app-shell")
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      this.isMobile = screenSize.matches;
    });
    this.currentLanguage = localStorage.getItem('language') || 'en';

    // this.selected = parseInt(localStorage.getItem('selected_hotel') || '-1');
    // if (this.selected > -1) {
    //   return;
    // }

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
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      this.isAuthenticated = false;
      return false;
    }

    this.isAuthenticated = true;
    //this.getHotels();

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

  changeHotel(event:any) {
    console.log(event.value)
  }

  getHotels() {
    if (this.selected === -1) {
      this.selected = parseInt(localStorage.getItem('selected_hotel') || '-1');
      if (this.selected > -1) {
        return;
      }
    }

    // this.hotelService.apiHotelGet$Json().subscribe({
    //   next: (response) => {
    //     this.hotels = response;
    //   },
    //   error: (error) => {
    //     console.log(error)
    //   }
    // });
  }
}

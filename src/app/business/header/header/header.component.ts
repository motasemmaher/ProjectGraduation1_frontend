import { Component, OnInit} from '@angular/core';
import { NbMenuService, NbMenuItem } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { Router } from '@angular/router';
import { UserApiService } from '../../Services/user/userApi.service';

@Component({
  selector: 'app-header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,


})

export class HeaderComponent implements OnInit {
  // tslint:disable-next-line: max-line-length
  constructor(private nbMenuService: NbMenuService, private authService: NbAuthService, private router: Router, private userApi: UserApiService) { }
  navbarOpen = false;
  dropDownMenu = false;
  imagePath = 'assets/image/3185382.jpg';
  user: any = {};
  contacts: { name: string, title: string, id: string }[] = [];
  ListOfContacts = [];
  IsopenContact = false;
  isLogin: any = false;
  username = 'guest';
  contactSelected: any = {};
  IscontactSelected = false;
  items = [
    { title: 'Profile' },
    { title: 'Setting' },
    { title: 'Logout' },
  ];
  usernames = [];

  diplayContacts(event) {
    event.stopPropagation();
    this.IsopenContact = !this.IsopenContact;
    if (this.IsopenContact) {
      this.contacts = [];
      this.userApi.getContact(this.user.user.id).pipe().subscribe((conts: any) => {
        const cons = conts?.contacts;
        cons?.forEach(element => {
          this.contacts.push({ name: element.name, title: 'Store', id: element._id });
        });
      });
    }
  }

  ngOnInit() {
    this.nbMenuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'my-context-menu'),
        map(({ item: { title } }) => title),
      )
      .subscribe(title => {
        // tslint:disable-next-line: triple-equals
        if (title == 'Logout') {
          this.router.navigate(['/auth/logout']);
          this.IscontactSelected = false;
        }
      });
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {
        if (token.isValid()) {
          this.isLogin = true;
          this.user = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable
          this.username = this.user.user.username;
        } else {
          this.isLogin = false;
        }
      });
  }

  ngClickScreen() {
    this.IsopenContact = false;
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  toggleDropDown() {
    this.dropDownMenu = !this.dropDownMenu;
  }

  openchat(contact) {
    this.IsopenContact = false;
    this.contactSelected = contact;
    this.IscontactSelected = true;
  }

  login(){
    this.router.navigateByUrl(`/auth/login`);
  }

}

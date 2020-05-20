import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { NbMenuService } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { Router } from '@angular/router'
import { UserApiService } from '../Services/user/userApi.service';
import {ChatComponent} from '../shared/Chat/Chat.component'
@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,


})

export class HeaderComponent implements OnInit {
  navbarOpen = false;
  dropDownMenu = false
  imagePath = "assets/image/3185382.jpg"
  user: any = {};
  contacts: { name: string,title:string,id:string }[] = []
  ListOfContacts = []
  IsopenContact = false
  isLogin: any = false
  username = "guest"
  contactSelected:any = {}
  IscontactSelected = false
  items = [
    { title: 'Profile' },
    { title: 'Setting' },
    { title: 'Logout' },
  ]
  constructor(private el: ElementRef, private nbMenuService: NbMenuService, private authService: NbAuthService, private router: Router, private userApi: UserApiService) {

  }
  diplayContacts($event) {
    event.stopPropagation();
    this.IsopenContact = !this.IsopenContact
  }
  usernames = []
  ngOnInit() {
    this.nbMenuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'my-context-menu'),
        map(({ item: { title } }) => title),
      )
      .subscribe(title => {
        if (title == 'Logout') {
          this.router.navigate(['/auth/logout'])
          this.IscontactSelected = false;
        }
      });
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {
        if (token.isValid()) {
          this.isLogin = true
          this.user = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable 
          this.username = this.user.user.username
        } else {
          this.isLogin = false
        }
      });
      
    this.userApi.getContact(this.user._id).pipe().subscribe((conts: any) => {
      console.log(conts[0])
      let cons = conts[0].contacts
      cons.forEach(element => {
        this.contacts.push({name:element.name,title:"Store",id:element._id})

      });
    })
  }

  ngClickScreen(){
    this.IsopenContact = false;
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen
  }
  toggleDropDown() {
    this.dropDownMenu = !this.dropDownMenu
  }
  openchat(contact){
    this.IsopenContact = false;  
    this.contactSelected = contact;
    this.IscontactSelected = true;
  }

  /* @HostListener('ListContacts:click') ClickOutSideDirective($event){
     console.log(event['toElement'])
     event.stopPropagation();
   if(event['toElement'] != this.el.nativeElement.getElementsByClassName("ListContacts")[0] ){
     this.IsopenContact = false;
   }
 
  }*/

}


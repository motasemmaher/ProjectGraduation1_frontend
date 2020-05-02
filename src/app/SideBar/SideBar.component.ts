import {ChangeDetectionStrategy,Directive, Component, OnInit, ViewEncapsulation, ElementRef, AfterViewInit, Output, EventEmitter, HostListener } from '@angular/core';
import { NbMenuItem,NbSidebarService,NbMenuService } from '@nebular/theme';
import { NbIconLibraries } from '@nebular/theme';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

import { } from'@fortawesome/angular-fontawesome'
@Component({
  selector: 'app-SideBar',
  templateUrl: './SideBar.component.html',
  styleUrls: ['./SideBar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class SideBarComponent implements OnInit {

  constructor(private sidebarService: NbSidebarService, private menuService :NbMenuService,private iconLibraries: NbIconLibraries) {
    this.iconLibraries.registerFontPack('solid', {packClass: 'fas', iconClassPrefix: 'fa'});
    this.iconLibraries.registerFontPack('regular', {packClass: 'far', iconClassPrefix: 'fa'});
    this.iconLibraries.registerFontPack('light', {packClass: 'fal', iconClassPrefix: 'fa'});
    this.iconLibraries.registerFontPack('duotone', {packClass: 'fad', iconClassPrefix: 'fa'});
    this.iconLibraries.registerFontPack('brands', {packClass: 'fab', iconClassPrefix: 'fa'});


  }

  addMenuItem(item:any = []) {
    item.forEach(element => {
      this.menuService.addItems([{
        title: element.name,
        target: '_blank',
        icon: element.icon,
        url: 'https://github.com/akveo/ngx-admin',
      }], 'menu');
    });
  }
  ngOnInit() {

  }

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }

  items: NbMenuItem[] = [
    {
      title: 'Search By Image',
      icon:"search",

    },
    {
      title: 'Homepage',
      icon:{ icon: 'home', pack: 'solid' },
      link:'homepage'
    },
    {
      title: 'Stores',
      icon:{ icon: 'store', pack: 'solid' },
      expanded: true,
      children: [
        {
          title: 'All',
        },
        {
          title: 'Near By',
        }
      ],
    },
    {
      title: 'Products',
      icon:{ icon: 'box-open', pack: 'solid' },
      children: [
        {
          title: 'Parts',
        },
        {
          title: 'Accessories',
        },
        {
          title: 'Services',
        }
      ],
    },
    {
      title: 'Categories',
      icon:"keypad",

    },
    {
      title: 'Offers',
      icon:"gift"
    },
    {
      title: 'Shopping Cart',
      icon:"shopping-cart"
    },

  ];


}
  
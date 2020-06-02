import { Component, OnInit } from '@angular/core';
import { NbMenuService } from '@nebular/theme';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-HomePage',
  templateUrl: './HomePage.component.html',
  styleUrls: ['./HomePage.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private menuService: NbMenuService) { }
  imageURL = '/frontend/upmyride/src/assets/image/3185382.jpg';

  menuItems = ['motasem', 'home '];
  data: [];
  private destroy$ = new Subject<void>();
  selectedItem: string;

  ngOnInit() {
  }
}

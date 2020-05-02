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
  imageURL="/frontend/upmyride/src/assets/image/3185382.jpg"

  ngOnInit() {
  }

  menuItems = ["motasem","home "];

  private destroy$ = new Subject<void>();
  selectedItem: string;

  constructor(private menuService: NbMenuService) { }



  // collapseAll() {
  //   this.menuService.collapseAll('menu');
  // }

  // navigateHome() {
  //   this.menuService.navigateHome('menu');
  // }

  // getSelectedItem() {
  //   this.menuService.getSelectedItem('menu')
  //     .pipe(takeUntil(this.destroy$))
  //     .subscribe( (menuBag) => {
  //       this.selectedItem = menuBag.item.title;
  //     });
  // }

  // ngOnDestroy() {
  //   this.destroy$.next();
  //   this.destroy$.complete();
  // }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  type = 'collapsed';
  open = false;
  items = [
    { title: 'Profile' },
    { title: 'Setting' },
    { title: 'Logout' },
  ];
  constructor() { }

  ngOnInit(): void {
  }
  toggleSideBar(){
    this.open = !this.open;
    console.log(this.open);
    if (this.open){
      this.type = 'expanded';
    }else{
      this.type = 'collapsed';
    }
  }



}

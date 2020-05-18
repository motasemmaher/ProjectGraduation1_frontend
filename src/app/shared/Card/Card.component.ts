import { Component, OnInit,Input,Pipe } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-Card',
  templateUrl: './Card.component.html',
  styleUrls: ['./Card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private router:Router) { }
  @Input()data :[];

  ngOnInit() {
  }

  onViewStore(storeId){
    this.router.navigateByUrl(`/store/${storeId}`)
  }


}

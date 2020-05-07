import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-Card',
  templateUrl: './Card.component.html',
  styleUrls: ['./Card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }
  @Input()data :[];

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { StoreAPIService } from '../Services/store/storeAPI.service'
import { element } from 'protractor';
@Component({
  selector: 'app-Store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  stores: {
    name: string, image: string,id:string,
    accent:string, description: string, btn:string
  }[] = []
  constructor(private api: StoreAPIService) {
    this.api.getStores().subscribe((stores:any) => {
      stores.stores.forEach((element:any) => {
        this.stores.push({
          name: element.name,
          image: 'https://image.shutterstock.com/image-vector/vector-shop-market-store-front-260nw-1009297618.jpg',
          description: element.description,
          accent: 'info', btn: 'View Store',
          id:element._id
        })
      })
    })
  }

  ngOnInit() {
  }



}

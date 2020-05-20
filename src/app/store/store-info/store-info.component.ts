import { Component, OnInit } from '@angular/core';
import { StoreApiService } from '../service/storeApi.service'
import { ActivatedRoute } from "@angular/router";
import { async } from '@angular/core/testing';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth'

@Component({
  selector: 'app-store-info',
  templateUrl: './store-info.component.html',
  styleUrls: ['./store-info.component.css']
})
export class StoreInfoComponent implements OnInit {
  storeInfo: {
    name: string, image: string,
    description: string,
    location: String,
  } = { name: "", image: "", description: "", location: "" };
  user: any = {}
  isLogin: boolean;
  id: string;
  token:any

  constructor(private api: StoreApiService, private route: ActivatedRoute, private authService: NbAuthService) {


  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
      this.api.getStoreInfo(this.id).subscribe(async (store: any) => {
        this.storeInfo.description = store.stores.description
        this.storeInfo.name = store.stores.name
        this.storeInfo.image = 'https://image.shutterstock.com/image-vector/vector-shop-market-store-front-260nw-1009297618.jpg'
        this.storeInfo.location = store.stores.location
      })
    })
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {
        if (token.isValid()) {
          this.user = token.getPayload().user; // here we receive a payload from the token and assigns it to our `user` variable 
          this.isLogin = true
          this.token = token
        } else {
          this.isLogin = false
        }
      });
  }
  onStartChat() {
    if (this.isLogin) {
      this.api.createContact(this.user.id, this.user.username, this.id, this.storeInfo.name,this.token).subscribe();
    }

  }
  products = [
    {
      "image": "https://www.w3schools.com/css/img_5terre.jpg",
      "accent": "success",
      "name": "Pearson",
      "description": "Sint officia exercitation amet non quis mollit do aliqua non id occaecat eu. Ad elit officia qui nulla id excepteur. Ut et elit exercitation cillum in cillum ut voluptate proident. Labore consequat ipsum quis laborum deserunt nulla est irure deserunt reprehenderit aliquip.\r\n",
      "price": -78.145436,
      "btn": "Add To Cart"
    },
    {
      "image": "https://www.w3schools.com/css/img_5terre.jpg",
      "accent": "danger",
      "name": "Summer",
      "description": "Laborum deserunt minim culpa consectetur nostrud laboris magna elit est eu ullamco id. Nisi esse officia et laborum tempor ad exercitation amet. Laborum proident nostrud nostrud sint elit non elit. Fugiat elit amet labore et. Non laborum labore qui dolore cillum labore aliquip adipisicing et. Veniam ut culpa culpa aliquip sunt anim.\r\n",
      "price": -63.693371,
      "btn": "Add To Cart"
    },
    {
      "image": "https://www.w3schools.com/css/img_5terre.jpg",
      "accent": "danger",
      "name": "Aida",
      "description": "Velit enim et deserunt dolore labore Lorem eu. Et officia qui aliqua irure anim consequat consequat consectetur magna aute voluptate consequat in tempor. Consequat nulla fugiat ipsum ut tempor duis sit ad ea. Elit laboris ut aliquip cupidatat eiusmod anim eu occaecat esse ad in enim magna. Quis reprehenderit laborum nisi aute eu ipsum enim. Do aute id nostrud sint incididunt mollit eiusmod non duis reprehenderit voluptate id tempor ut. Ea labore excepteur amet commodo ea laboris et quis commodo duis pariatur excepteur.\r\n",
      "price": -73.507019,
      "btn": "Add To Cart"
    },
    {
      "image": "https://www.w3schools.com/css/img_5terre.jpg",
      "accent": "success",
      "name": "Wooten",
      "description": "Incididunt enim occaecat enim do consequat. Adipisicing do aliqua veniam culpa qui deserunt ex aliqua eiusmod id aliquip consequat. Laboris duis in eu fugiat irure magna adipisicing tempor ut.\r\n",
      "price": 55.978427,
      "btn": "Add To Cart"
    },
    {
      "image": "https://www.w3schools.com/css/img_5terre.jpg",
      "accent": "danger",
      "name": "Kenya",
      "description": "Eiusmod ea esse nisi in occaecat aliquip pariatur anim. Cillum officia laborum et in fugiat ad. Nostrud deserunt minim magna sunt eu sit excepteur dolore velit consectetur pariatur enim. Nulla aliquip cupidatat eu aute laborum aliquip. Proident non consectetur ut id tempor laborum. Amet eu consequat laboris velit dolor reprehenderit magna aute veniam eu aute occaecat.\r\n",
      "price": 19.993856,
      "btn": "Add To Cart"
    },
    {
      "image": "https://www.w3schools.com/css/img_5terre.jpg",
      "accent": "success",
      "name": "Finch",
      "description": "Eu mollit incididunt sint Lorem quis labore ea voluptate incididunt est est sunt eiusmod. Sunt mollit quis sit laborum Lorem laboris anim minim eiusmod ea cupidatat esse do. Id consectetur culpa aliqua ut officia veniam dolore elit quis consequat. Est pariatur amet voluptate fugiat esse et excepteur ad reprehenderit eu qui dolore tempor.\r\n",
      "price": 71.563296,
      "btn": "Add To Cart"
    },
    {
      "image": "https://www.w3schools.com/css/img_5terre.jpg",
      "accent": "success",
      "name": "Odessa",
      "description": "Minim qui nulla eiusmod esse pariatur labore ea eiusmod consequat nostrud veniam nisi. Et eiusmod exercitation culpa mollit deserunt tempor et exercitation incididunt elit eu duis est minim. Consequat dolor eiusmod non occaecat ut fugiat deserunt pariatur. Aute deserunt ex commodo commodo sint excepteur deserunt in. Mollit et enim ea culpa ea dolor ipsum ut exercitation minim culpa eiusmod Lorem ullamco.\r\n",
      "price": -53.152941,
      "btn": "Add To Cart"
    },
    {
      "image": "https://www.w3schools.com/css/img_5terre.jpg",
      "accent": "danger",
      "name": "Rocha",
      "description": "Aliquip exercitation consectetur ad deserunt aute est. Excepteur consectetur deserunt dolor elit laboris laborum qui mollit aliquip cupidatat. Quis exercitation consequat dolor laboris magna tempor ea ad consectetur ea proident laboris.\r\n",
      "price": -6.351254,
      "btn": "Add To Cart"
    },
    {
      "image": "https://www.w3schools.com/css/img_5terre.jpg",
      "accent": "danger",
      "name": "Dotson",
      "description": "Id duis enim laborum anim ullamco voluptate labore nisi anim laboris minim enim exercitation et. Sit aliquip ullamco deserunt amet irure quis aliqua aliquip nulla occaecat nisi veniam in. Sint mollit nulla nostrud exercitation anim eiusmod exercitation sint qui fugiat. Ut ad deserunt officia ipsum veniam laboris.\r\n",
      "price": 9.901018,
      "btn": "Add To Cart"
    },
    {
      "image": "https://www.w3schools.com/css/img_5terre.jpg",
      "accent": "success",
      "name": "Perez",
      "description": "Excepteur est occaecat do mollit ullamco consectetur qui minim occaecat et commodo mollit officia exercitation. Nostrud excepteur officia laboris eu. Eu id nostrud deserunt voluptate sit sint in cupidatat pariatur nulla sit aliqua eiusmod aute. Incididunt aliquip qui veniam deserunt incididunt est. Consectetur anim cillum laborum laborum exercitation. Cupidatat deserunt aute consequat anim elit aliquip ut tempor sint adipisicing est. Exercitation consequat id anim officia id velit dolor ex irure cupidatat labore sint adipisicing.\r\n",
      "price": 80.000471,
      "btn": "Add To Cart"
    },
    {
      "image": "https://www.w3schools.com/css/img_5terre.jpg",
      "accent": "danger",
      "name": "Tasha",
      "description": "Veniam veniam esse do esse eu. Id anim anim aute et ad nostrud Lorem adipisicing labore deserunt labore magna laboris minim. Enim officia enim quis et reprehenderit mollit exercitation ipsum nisi ipsum consequat sunt. Adipisicing culpa excepteur proident qui irure in pariatur esse non minim. Nulla labore ea ad in tempor ullamco qui magna cillum ad.\r\n",
      "price": 39.426662,
      "btn": "Add To Cart"
    },
    {
      "image": "https://www.w3schools.com/css/img_5terre.jpg",
      "accent": "success",
      "name": "Sharron",
      "description": "Ex ad Lorem Lorem reprehenderit. Eiusmod cupidatat esse aliqua dolore pariatur laboris commodo. Nisi mollit consectetur eu aute cupidatat. Pariatur amet ut veniam exercitation et duis occaecat aute ut duis aute. Aute officia laborum commodo pariatur cillum aute eu cupidatat elit. Magna anim commodo voluptate nostrud. Ad labore enim voluptate aute tempor et consequat dolore ad et fugiat.\r\n",
      "price": -10.788995,
      "btn": "Add To Cart"
    },
    {
      "image": "https://www.w3schools.com/css/img_5terre.jpg",
      "accent": "success",
      "name": "Kaitlin",
      "description": "Pariatur voluptate ex culpa ullamco mollit laborum officia. Dolore quis est velit ullamco do. Duis sunt officia eiusmod proident eu. Consequat qui aliqua Lorem amet qui aliquip proident incididunt Lorem consectetur culpa. Consequat sit mollit duis proident laborum et.\r\n",
      "price": 45.430703,
      "btn": "Add To Cart"
    },
    {
      "image": "https://www.w3schools.com/css/img_5terre.jpg",
      "accent": "success",
      "name": "Kent",
      "description": "Elit ea id consequat ad esse consequat minim cupidatat labore ad. Irure occaecat in ad aliqua culpa in sint. Tempor excepteur aute et non incididunt culpa in aute. Anim et officia ut Lorem occaecat labore commodo exercitation. Incididunt deserunt nostrud esse exercitation laborum anim esse exercitation. Fugiat do aliquip adipisicing proident aliqua sunt velit elit irure. Aliqua est voluptate duis velit labore minim sint nulla nulla magna.\r\n",
      "price": -15.067504,
      "btn": "Add To Cart"
    }
  ]
}

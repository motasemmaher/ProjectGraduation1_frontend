import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NbAuthComponent } from '@nebular/auth';
import {AuthServiceService  } from '../Services/auth/AuthService.service'
// const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
import { NbAuthService } from '@nebular/auth'

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})

export class RegisterComponent implements OnInit {
  user: any = {};
  store: any = {};


  constructor(private api: AuthServiceService,private auth:NbAuthService) {
    //super(auth,null);
  }
  ngOnInit() {


  }
  register(): void {

    this.api.createGarageOwner(this.user, this.store)

  }

}

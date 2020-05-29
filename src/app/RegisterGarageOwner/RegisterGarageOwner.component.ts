import { Component, OnInit } from '@angular/core';
import { NbAuthComponent, NbAuthService, NbTokenService } from '@nebular/auth';
import { Router } from '@angular/router'
import { AuthServiceService } from '../Services/auth/AuthService.service'

@Component({
  selector: 'app-Register',
  templateUrl: './RegisterGarageOwner.component.html',
  styleUrls: ['./RegisterGarageOwner.component.css'],
})
export class RegisterGarageOwner extends NbAuthComponent implements OnInit {
  user: any = {};
  store: any = {};
  submitted: boolean;

  constructor(private authService: AuthServiceService, public auth: NbAuthService, protected tokenS: NbTokenService, private router: Router) {
    super(auth, null);
  }
  ngOnInit() {
  }
  register(): void {
    this.authService.createGarageOwner(this.user, this.store).subscribe((data) => {
      if (data != null) {
        this.router.navigateByUrl('/auth/login')
      }
    })
  }

  onMaxLine($event){
  }
}

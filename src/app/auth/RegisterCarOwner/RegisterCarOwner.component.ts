import { Component, OnInit } from '@angular/core';
import { NbAuthComponent, NbAuthService, NbTokenService } from '@nebular/auth';
import { Router } from '@angular/router';
import { AuthServiceService } from '../service/auth/AuthService.service';

@Component({
  selector: 'app-Register',
  templateUrl: './RegisterCarOwner.component.html',
  styleUrls: ['./RegisterCarOwner.component.css'],
})
export class RegisterCarOwner extends NbAuthComponent implements OnInit {
  user: any = {};
  car: any = {};
  submitted: boolean;

  constructor(private authService: AuthServiceService, public auth: NbAuthService, protected tokenS: NbTokenService, private router: Router) {
    super(auth, null);
  }
  ngOnInit() {
  }
  register(): void {
    console.log(this.user);
    this.authService.createCarOwner(this.user, this.car).subscribe((data) => {
      if (data != null) {
        this.router.navigateByUrl('/auth/login');
      }
    });
  }
}

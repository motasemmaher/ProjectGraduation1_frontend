import { Component, OnInit } from '@angular/core';
import { NbAuthComponent, NbAuthService, NbTokenService } from '@nebular/auth';
import { Router } from '@angular/router'
import { AuthServiceService } from '../Services/auth/AuthService.service'

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css'],
})
export class RegisterComponent extends NbAuthComponent implements OnInit {
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
}

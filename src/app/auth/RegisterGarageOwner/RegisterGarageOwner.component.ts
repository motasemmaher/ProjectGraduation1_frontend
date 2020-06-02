import { Component, OnInit } from '@angular/core';
import { NbAuthComponent, NbAuthService, NbTokenService } from '@nebular/auth';
import { Router } from '@angular/router';
import { AuthServiceService } from '../service/auth/AuthService.service';

@Component({
  selector: 'app-Register',
  templateUrl: './RegisterGarageOwner.component.html',
  styleUrls: ['./RegisterGarageOwner.component.css'],
})
// tslint:disable-next-line: component-class-suffix
export class RegisterGarageOwner extends NbAuthComponent implements OnInit {
  user: any = {};
  store: any = {};
  submitted: boolean;

  // tslint:disable-next-line: max-line-length
  constructor(private authService: AuthServiceService, public auth: NbAuthService, protected tokenS: NbTokenService, private router: Router) {
    super(auth, null);
  }
  ngOnInit() {
  }
  register(): void {
    this.authService.createGarageOwner(this.user, this.store).subscribe((data) => {
      if (data != null) {
        this.router.navigateByUrl('/auth/login');
      }
    });
  }

  onMaxLine($event){
  }
}

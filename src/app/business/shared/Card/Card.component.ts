import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { ShowcaseDialogComponentComponent } from '../showcase-dialog-component/showcase-dialog-component.component';

@Component({
  selector: 'app-Card',
  templateUrl: './Card.component.html',
  styleUrls: ['./Card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private router: Router, private dialogService: NbDialogService) { }
  @Input() data: any[];

  ngOnInit() {
  }

  onView(id) {
    // tslint:disable-next-line: triple-equals
    if (this.data[0].type == 'product') {
      this.dialogService.open(ShowcaseDialogComponentComponent, {
        context: {
          data: {
            title: this.data[id].name,
            description: this.data[id].description,
            image: this.data[id].image,
            price: this.data[id].price
          },
        },
      });
    } else {
      this.router.navigateByUrl(`/business/store/${this.data[id].id}`);
    }
  }


}

import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
@Component({
  selector: 'app-showcase-dialog-component',
  templateUrl: './showcase-dialog-component.component.html',
  styleUrls: ['./showcase-dialog-component.component.css']
})
export class ShowcaseDialogComponentComponent implements OnInit {

  @Input() data: any;
  value = 30;

  constructor(protected dialogRef: NbDialogRef<any>) { }
  close() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }


}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseDialogComponentComponent } from './showcase-dialog-component.component';

describe('ShowcaseDialogComponentComponent', () => {
  let component: ShowcaseDialogComponentComponent;
  let fixture: ComponentFixture<ShowcaseDialogComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcaseDialogComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

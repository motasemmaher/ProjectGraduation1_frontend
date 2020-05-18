/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RegisterCarOwner } from "./RegisterCarOwner.component";

describe('RegisterComponent', () => {
  let component: RegisterCarOwner;
  let fixture: ComponentFixture<RegisterCarOwner>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterCarOwner ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCarOwner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RegisterGarageOwner } from "./RegisterGarageOwner.component";

describe('RegisterComponent', () => {
  let component: RegisterGarageOwner;
  let fixture: ComponentFixture<RegisterGarageOwner>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterGarageOwner ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterGarageOwner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

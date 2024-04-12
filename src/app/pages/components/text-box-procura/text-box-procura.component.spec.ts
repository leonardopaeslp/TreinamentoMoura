/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TextBoxProcuraComponent } from './text-box-procura.component';

describe('TextBoxProcuraComponent', () => {
  let component: TextBoxProcuraComponent;
  let fixture: ComponentFixture<TextBoxProcuraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextBoxProcuraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBoxProcuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

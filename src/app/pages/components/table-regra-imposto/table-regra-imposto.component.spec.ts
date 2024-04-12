/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TableRegraImpostoComponent } from './table-regra-imposto.component';

describe('TableRegraImpostoComponent', () => {
  let component: TableRegraImpostoComponent;
  let fixture: ComponentFixture<TableRegraImpostoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableRegraImpostoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRegraImpostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

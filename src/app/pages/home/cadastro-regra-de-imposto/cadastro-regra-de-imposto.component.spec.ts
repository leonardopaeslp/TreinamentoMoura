/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CadastroRegraDeImpostoComponent } from './cadastro-regra-de-imposto.component';

describe('CadastroRegraDeImpostoComponent', () => {
  let component: CadastroRegraDeImpostoComponent;
  let fixture: ComponentFixture<CadastroRegraDeImpostoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroRegraDeImpostoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroRegraDeImpostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

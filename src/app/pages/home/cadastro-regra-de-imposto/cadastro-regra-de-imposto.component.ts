import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-regra-de-imposto',
  templateUrl: './cadastro-regra-de-imposto.component.html',
  styleUrls: ['./cadastro-regra-de-imposto.component.scss']
})
export class CadastroRegraDeImpostoComponent implements OnInit {
  public codigo: any;
  public nome: any;
  public taxa: any;
  constructor() { }

  ngOnInit() {
  }

  public ResultadoProcuraEmit($event: any){
    console.log($event);
  }

}

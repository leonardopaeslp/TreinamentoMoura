import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-de-produto',
  templateUrl: './cadastro-de-produto.component.html',
  styleUrls: ['./cadastro-de-produto.component.scss']
})
export class CadastroDeProdutoComponent implements OnInit {
  public codigo: any;
  public nome: any;
  public precoCusto: any;
  public markup: any;
  public precoVenda: any;
  public margemReal: any;
  public regraImp: any;

  constructor() { }

  ngOnInit() {
  }

  public ResultadoProcuraEmit($event: any){
    console.log($event);
  }

}

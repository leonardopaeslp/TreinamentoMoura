import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  public dataFromRelacao: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.dataFromRelacao = navigation?.extras.state?.['data'];
    /* Dados advindos da tela Relçaõ de Produto */
    console.log(this.dataFromRelacao);

   }

  ngOnInit() {
  }

  public ResultadoProcuraEmit($event: any){
    console.log($event);
  }

}

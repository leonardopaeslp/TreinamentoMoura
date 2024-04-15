import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-relacao-de-produto',
  templateUrl: './relacao-de-produto.component.html',
  styleUrls: ['./relacao-de-produto.component.scss']
})
export class RelacaoDeProdutoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public selectRowEmitter($event: any){
      /* Redirecionando e passando dados */
    this.router.navigate(['/home/cadProd'], { state: { data: $event } });
  }

}

import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

interface ProductDetail {
  Codigo: number; // Coluna 2: Código do cadastro
  Nome: string; // Coluna 3: Nome cadastrado
  PrecoDeCusto: number; // Coluna 4: Preço de Custo do produto
  PrecoDeVenda: number; // Coluna 5: Preço de Venda do produto
}

const ELEMENT_DATA: ProductDetail[] = [
  {Codigo: 101, Nome: 'Pão Integral', PrecoDeCusto: 1.00, PrecoDeVenda: 1.50},
  {Codigo: 102, Nome: 'Leite Orgânico', PrecoDeCusto: 2.00, PrecoDeVenda: 2.70},
  {Codigo: 103, Nome: 'Queijo Artesanal', PrecoDeCusto: 5.00, PrecoDeVenda: 7.00},
  {Codigo: 104, Nome: 'Café Gourmet', PrecoDeCusto: 8.00, PrecoDeVenda: 12.00},
  {Codigo: 105, Nome: 'Chocolate Amargo 70%', PrecoDeCusto: 3.50, PrecoDeVenda: 5.00},
  {Codigo: 106, Nome: 'Azeite Extra Virgem', PrecoDeCusto: 10.00, PrecoDeVenda: 15.00},
  {Codigo: 107, Nome: 'Vinho Tinto', PrecoDeCusto: 20.00, PrecoDeVenda: 30.00},
  {Codigo: 108, Nome: 'Cerveja Artesanal', PrecoDeCusto: 12.00, PrecoDeVenda: 18.00},
  {Codigo: 109, Nome: 'Macarrão Integral', PrecoDeCusto: 2.00, PrecoDeVenda: 3.00},
  {Codigo: 110, Nome: 'Arroz Basmati', PrecoDeCusto: 3.00, PrecoDeVenda: 4.50},
];

@Component({
  selector: 'app-table-cadastro-produto',
  templateUrl: './table-cadastro-produto.component.html',
  styleUrls: ['./table-cadastro-produto.component.scss']
})
export class TableCadastroProdutoComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = ['select','Codigo', 'Nome', 'PrecoDeCusto', 'PrecoDeVenda'];

  public dataSource = new MatTableDataSource(ELEMENT_DATA);

  @Output() selectRowEmitter = new EventEmitter<any>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  selectRow(element: any) {
    this.selectRowEmitter.emit(element);
  }

}

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

interface TaxRule {
  Codigo: number;
  Nome: string;
  Taxa: number;
}

const ELEMENT_DATA: TaxRule[] = [
  {Codigo: 101, Nome: 'Pão Integral', Taxa: 7.0},
  {Codigo: 102, Nome: 'Leite Orgânico', Taxa: 5.5},
  {Codigo: 103, Nome: 'Queijo Artesanal', Taxa: 8.2},
  {Codigo: 104, Nome: 'Café Gourmet', Taxa: 12.0},
  {Codigo: 105, Nome: 'Chocolate Amargo 70%', Taxa: 9.5},
  {Codigo: 106, Nome: 'Azeite Extra Virgem', Taxa: 4.5},
  {Codigo: 107, Nome: 'Vinho Tinto', Taxa: 15.0},
  {Codigo: 108, Nome: 'Cerveja Artesanal', Taxa: 10.0},
  {Codigo: 109, Nome: 'Macarrão Integral', Taxa: 3.0},
  {Codigo: 110, Nome: 'Arroz Basmati', Taxa: 2.5},
];

@Component({
  selector: 'app-table-regra-imposto',
  templateUrl: './table-regra-imposto.component.html',
  styleUrls: ['./table-regra-imposto.component.scss']
})
export class TableRegraImpostoComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['select','Codigo', 'Nome', 'Taxa'];

  public dataSource = new MatTableDataSource(ELEMENT_DATA);

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
    console.log(element); 
  }

}

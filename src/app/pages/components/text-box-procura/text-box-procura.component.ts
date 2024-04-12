import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalProcuraComponent } from './modal-procura/modal-procura.component';

@Component({
  selector: 'app-text-box-procura',
  templateUrl: './text-box-procura.component.html',
  styleUrls: ['./text-box-procura.component.scss']
})
export class TextBoxProcuraComponent implements OnInit, OnDestroy  {

  private _ngModelMoura!: any;

  @Output() ngModelMouraChange = new EventEmitter<any>();
  @Output() ResultadoProcuraEmit = new EventEmitter<any>();

  @Input()
  get ngModelMoura(): any {
    return this._ngModelMoura;
  }

  set ngModelMoura(val: any) {
    this._ngModelMoura = val;
    this.ngModelMouraChange.emit(this._ngModelMoura);
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  ngOnDestroy() {
    document.removeEventListener('keydown', this.handleKeyDown.bind(this));
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalProcuraComponent, {
      width: '1200px',
      data: { name: 'Angular' } // Você pode passar dados para o componente do modal, se necessário
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('O dialog foi fechado');
      // Lógica após fechar o modal
    });
  }

  public limparCampo(){
    this.ngModelMoura = null;
  }

  public percaDeFoco(){
    this.realizarProcuraPorCodigo(this.ngModelMoura);
  }

  public realizarProcuraPorCodigo(value: any){
    //codificação de procura
    this.ResultadoProcuraEmit.emit('Resultado Encontrado Aqui')
  }

  private handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'F2') {
      this.openDialog();
    }
  }

  
  

}

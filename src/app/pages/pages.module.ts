import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//Pages
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroRegraDeImpostoComponent } from './home/cadastro-regra-de-imposto/cadastro-regra-de-imposto.component';
import { CadastroDeProdutoComponent } from './home/cadastro-de-produto/cadastro-de-produto.component';
import { RelacaoDeProdutoComponent } from './home/relacao-de-produto/relacao-de-produto.component';

//Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';



//Componentes
import { ModalProcuraComponent } from './components/text-box-procura/modal-procura/modal-procura.component';
import { TextBoxProcuraComponent } from './components/text-box-procura/text-box-procura.component';
import { NavBarMaterialComponent } from './components/nav-bar-material/nav-bar-material.component';
import { TableRegraImpostoComponent } from './components/table-regra-imposto/table-regra-imposto.component';
import { TableCadastroProdutoComponent } from './components/table-cadastro-produto/table-cadastro-produto.component';






@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  declarations: [LoginComponent, HomeComponent, CadastroRegraDeImpostoComponent, CadastroDeProdutoComponent, RelacaoDeProdutoComponent, NavBarMaterialComponent, ModalProcuraComponent, TextBoxProcuraComponent, TableRegraImpostoComponent, TableCadastroProdutoComponent]
})
export class PagesModule { }

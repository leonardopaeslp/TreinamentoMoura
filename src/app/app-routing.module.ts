import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroRegraDeImpostoComponent } from './pages/home/cadastro-regra-de-imposto/cadastro-regra-de-imposto.component';
import { CadastroDeProdutoComponent } from './pages/home/cadastro-de-produto/cadastro-de-produto.component';
import { RelacaoDeProdutoComponent } from './pages/home/relacao-de-produto/relacao-de-produto.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { 
    path: 'home', component: HomeComponent,
    children: [
      { 
        path: 'cadRegraImp',
        component: CadastroRegraDeImpostoComponent
      },
      { 
        path: 'cadProd',
        component: CadastroDeProdutoComponent
      },
      { 
        path: 'relProd',
        component: RelacaoDeProdutoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}

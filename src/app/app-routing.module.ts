import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'clientes-list',
    loadChildren: () => import('./clientes-list/clientes-list.module').then( m => m.ClientesListPageModule)
  },
  {
    path: 'clientes-cadastro/:codigo',
    loadChildren: () => import('./clientes-cadastro/clientes-cadastro.module').then( m => m.ClientesCadastroPageModule)
  },
  {
    path: 'clientes-cadastro',
    loadChildren: () => import('./clientes-cadastro/clientes-cadastro.module').then( m => m.ClientesCadastroPageModule)
  },
  {
    path: 'orcamento-lista',
    loadChildren: () => import('./orcamento-lista/orcamento-lista.module').then( m => m.OrcamentoListaPageModule)
  },
  {
    path: 'orcamento-cadastro/:codigo',
    loadChildren: () => import('./orcamento-cadastro/orcamento-cadastro.module').then( m => m.OrcamentoCadastroPageModule)
  },
  {
    path: 'orcamento-cadastro',
    loadChildren: () => import('./orcamento-cadastro/orcamento-cadastro.module').then( m => m.OrcamentoCadastroPageModule)
  },
  {
    path: 'orcamento-produtos',
    loadChildren: () => import('./orcamento-produtos/orcamento-produtos.module').then( m => m.OrcamentoProdutosPageModule)
  },
  {
    path: 'orcamento-produtos/:codigo',
    loadChildren: () => import('./orcamento-produtos/orcamento-produtos.module').then( m => m.OrcamentoProdutosPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

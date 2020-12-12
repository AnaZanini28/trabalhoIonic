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
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

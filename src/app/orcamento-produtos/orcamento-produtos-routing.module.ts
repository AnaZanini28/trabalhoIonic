import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrcamentoProdutosPage } from './orcamento-produtos.page';

const routes: Routes = [
  {
    path: '',
    component: OrcamentoProdutosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrcamentoProdutosPageRoutingModule {}

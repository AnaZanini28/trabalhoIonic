import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrcamentoListaPage } from './orcamento-lista.page';

const routes: Routes = [
  {
    path: '',
    component: OrcamentoListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrcamentoListaPageRoutingModule {}

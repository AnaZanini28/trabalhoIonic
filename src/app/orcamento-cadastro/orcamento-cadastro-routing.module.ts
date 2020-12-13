import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrcamentoCadastroPage } from './orcamento-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: OrcamentoCadastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrcamentoCadastroPageRoutingModule {}

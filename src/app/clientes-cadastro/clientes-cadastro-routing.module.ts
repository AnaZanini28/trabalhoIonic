import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesCadastroPage } from './clientes-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: ClientesCadastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesCadastroPageRoutingModule {}

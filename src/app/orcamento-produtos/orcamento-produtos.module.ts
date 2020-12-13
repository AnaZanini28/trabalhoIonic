import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrcamentoProdutosPageRoutingModule } from './orcamento-produtos-routing.module';

import { OrcamentoProdutosPage } from './orcamento-produtos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrcamentoProdutosPageRoutingModule
  ],
  declarations: [OrcamentoProdutosPage]
})
export class OrcamentoProdutosPageModule {}

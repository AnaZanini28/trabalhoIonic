import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrcamentoCadastroPageRoutingModule } from './orcamento-cadastro-routing.module';

import { OrcamentoCadastroPage } from './orcamento-cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrcamentoCadastroPageRoutingModule
  ],
  declarations: [OrcamentoCadastroPage]
})
export class OrcamentoCadastroPageModule {}

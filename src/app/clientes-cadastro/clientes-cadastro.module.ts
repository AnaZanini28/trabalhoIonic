import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesCadastroPageRoutingModule } from './clientes-cadastro-routing.module';

import { ClientesCadastroPage } from './clientes-cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientesCadastroPageRoutingModule
  ],
  declarations: [ClientesCadastroPage]
})
export class ClientesCadastroPageModule {}

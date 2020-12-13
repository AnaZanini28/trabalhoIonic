import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular'; 
import { OrcamentoService } from '../shared/orcamento.service';
import { Orcamentos } from '../shared/orcamentos';

@Component({
  selector: 'app-orcamento-lista',
  templateUrl: './orcamento-lista.page.html',
  styleUrls: ['./orcamento-lista.page.scss'],
})
export class OrcamentoListaPage implements OnInit {

  //cria a lista de orcamentos
  listaOrcamentos: Orcamentos[];

  constructor(//adiciona services a pagina
    public toastController: ToastController, 
    private orcamentosService: OrcamentoService,
    private router: Router) { }

  ngOnInit() {
     //ao iniciar chama a funcao de listagem de orcamentos
     this.listar();
  }

 //lista os clientes cadastrados (services)
 listar(){
    this.listaOrcamentos = this.orcamentosService.getOrcamentos();
  }

  ionViewWillEnter() {
    this.listar();
  }

  //edita orcamento
  editar(orcamento: Orcamentos){ 
    this.router.navigate(['orcamento-cadastro', orcamento.codigo]);
  }

  //exclui orcamento da lista
  excluir(orcamento: Orcamentos){
    this.orcamentosService.excluir(orcamento);
    this.listar();
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ClienteService } from '../shared/cliente.service';
import { Clientes } from '../shared/clientes';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.page.html',
  styleUrls: ['./clientes-list.page.scss'],
})
export class ClientesListPage implements OnInit {

  //cria a lista de clientes
  listaClientes: Clientes[];

  constructor(
    //adiciona services a pagina
    public toastController: ToastController, 
    private clientesService: ClienteService,
    private router: Router 
  ) { }

  ngOnInit() {
    //ao iniciar chama a funcao de listagem de clientes
     this.listar();
  }

  //lista os clientes cadastrados (services)
  listar(){
    this.listaClientes= this.clientesService.getClientes();
  }

  ionViewWillEnter() {
    this.listar();
  }
  
  //edita clientes
  editar(cliente: Clientes){ 
    this.router.navigate(['clientes-cadastro', cliente.codigo]);
  }

  //exclui clientes da lista
  excluir(cliente: Clientes){
    this.clientesService.excluir(cliente);
    this.listar();
  }
}

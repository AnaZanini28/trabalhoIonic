import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Key } from 'protractor';
import { ClienteService } from '../shared/cliente.service';
import { Clientes } from '../shared/clientes';
import { Sexo } from '../shared/sexo.enum'; 

@Component({
  selector: 'app-clientes-cadastro',
  templateUrl: './clientes-cadastro.page.html',
  styleUrls: ['./clientes-cadastro.page.scss'], 
})
export class ClientesCadastroPage implements OnInit { 

  cliente: Clientes;

  //enum sexo
  sexos = Object.keys(Sexo).map((key) => ({valor: key, descricao: Sexo[key]}))

  constructor(
    private clienteSevice : ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.cliente = new Clientes();

    const codigo = this.activatedRoute.snapshot.paramMap.get('codigo');

    if(codigo){
      this.cliente = this.clienteSevice.getCliente(parseInt(codigo));

      if(this.cliente.nascimento instanceof Date){
        this.cliente.nascimento = this.cliente.nascimento.toISOString();
      }

    }else{
      this.cliente.codigo = this.clienteSevice.getCodigo();      
    }
  }
  
  ngOnInit() {
  }

  //função salvar e voltar para lista de clientes
  salvar(){
    this.clienteSevice.salvar(this.cliente); 
    this.router.navigate(['']);
   }

}

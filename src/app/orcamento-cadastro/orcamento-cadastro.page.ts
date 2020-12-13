import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../shared/cliente.service';
import { Clientes } from '../shared/clientes';
import { OrcamentoService } from '../shared/orcamento.service';
import { Orcamentos } from '../shared/orcamentos';
import { Tipo } from '../shared/tipo.enum';

@Component({
  selector: 'app-orcamento-cadastro',
  templateUrl: './orcamento-cadastro.page.html',
  styleUrls: ['./orcamento-cadastro.page.scss'],
})
export class OrcamentoCadastroPage implements OnInit {

  orcamento: Orcamentos;
  
  //cria a lista de clientes
  listaClientes: Clientes[];

  //enum tipo
  tipos = Object.keys(Tipo).map((key) => ({valor: key, descricao: Tipo[key]}))
 
  constructor(
    private orcamentoSevice : OrcamentoService,
    private router: Router, 
    private clientesService: ClienteService,
    private activatedRoute: ActivatedRoute) { 
      
    this.orcamento = new Orcamentos();

    const codigo = this.activatedRoute.snapshot.paramMap.get('codigo');

    if(codigo){
        this.orcamento = this.orcamentoSevice.getOrcamento(parseInt(codigo));
    }else{
      this.orcamento.codigo = this.orcamentoSevice.getCodigo();      
    }
  } 

  ngOnInit() {
  
    //ao iniciar chama a funcao de listagem de clientes
    this.listar();
  }

  
  //função salvar e voltar para lista de orcamento
  salvar(){  
    this.orcamentoSevice.salvar(this.orcamento); 
    this.router.navigate(['']);
   }

  //auxiliar para mostrar os clientesno combo  
   listar(){
    this.listaClientes= this.clientesService.getClientes();
  }

  //redirecionar para pafina de adicionar os produtos
  adicionarProdutos(orcamento: Orcamentos){ 
    this.router.navigate(['/orcamento-produtos']);
  }

}

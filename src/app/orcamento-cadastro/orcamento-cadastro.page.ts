import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  
  //enum tipo
  tipos = Object.keys(Tipo).map((key) => ({valor: key, descricao: Tipo[key]}))

  constructor(
    private orcamentoSevice : OrcamentoService,
    private router: Router,
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
  } 
  
  //função salvar e voltar para lista de orcamento
  salvar(){  
    this.orcamentoSevice.salvar(this.orcamento); 
    this.router.navigate(['']);
   }
   
}

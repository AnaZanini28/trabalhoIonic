import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Orcamentos } from './orcamentos';
import { Tipo } from './tipo.enum';

@Injectable({
  providedIn: 'root'
})
export class OrcamentoService {

  
  //cria a lista de orcamentos
  private orcamentos : Orcamentos[];

  constructor(
    public toastController: ToastController) { 
  //chama a lista de clientes e adiciona os valores iniciais
  this.orcamentos = [
    { codigo: 1,
      cliente: "Ana Caroline",
      tipo: Tipo.M,
      total: '10.00',
      descricao: "Mão de obra"
    },
    { codigo: 2,
      cliente: "Diego",
      tipo: Tipo.P,
      total: '20.00',
      descricao: "Referente aos produtos"
    } 
  ];
}

//parametro que busca o valor na edição
  getOrcamento(codigo: number): Orcamentos {
    return this.orcamentos.find(o => o.codigo === codigo);
  }

//buscar orcamento fora desta pagina
getOrcamentos(){
  return this.orcamentos;
}
 
//chama função excluir orcamento na pagina "orcamentos-list.page.ts"
  excluir(orcamento: Orcamentos){
    this.orcamentos = this.orcamentos.filter (o => o.codigo !== orcamento.codigo);
  }

  
  //mostrar mensagem adicionado
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Orcamento adicionado com sucesso!',
      duration: 2000
    });
    toast.present();
  }
  
  //mostrar mensagem editado
  async presentToast1() {
    const toast = await this.toastController.create({
      message: 'Orcamento editado com sucesso!',
      duration: 2000
    });
    toast.present();
  }

  
  //chama função salvar orcamentos na pagina "orcamentos-cadastro.page.ts"
  salvar(orcamento: Orcamentos) {

    const indice = this.orcamentos.findIndex(o => o.codigo === orcamento.codigo);

    if(indice === -1){ // adiciona
      this.orcamentos = [...this.orcamentos, orcamento];
      this.presentToast(); 
    }else{// edita
      this.orcamentos[indice] = {...orcamento}; 
       this.presentToast1(); 
    }
    
  }

  getCodigo(){
    return this.orcamentos.length + 1;
  }


}
  
 

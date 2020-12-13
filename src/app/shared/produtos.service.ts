import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  //cria a lista de produtos
    private produtos : Produtos[];

  constructor(
    public toastController: ToastController) {
      //chama a lista de clientes e adiciona os valores iniciais
    this.produtos = [
      { codigo: 1,
        codigoOrc: 1,
        descricao: "Sony PlayStation 5  ",
        valor: "4699.00",
        quantidade: "1",
        foto: "https://s2.glbimg.com/bhl6hykNcUV3uVQXi5xOgPcctl0=/0x0:3600x2400/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/L/W/GO8WsPQ6C090NUUUD2GA/ps5.jpg"
      }
    ];
  }

//buscar orcamento fora desta pagina
  getOrcamentos(){
  return this.produtos;
  }

  //chama função excluir produto na pagina "produtos-list.page.ts"
  excluir(produto: Produtos){
    this.produtos = this.produtos.filter (p => p.codigo !== produto.codigo);
  }
   
//chama função salvar produtos na pagina "produtos-cadastro.page.ts"
salvar(produto: Produtos) {
    this.produtos = [...this.produtos, produto];
}

getCodigo(){
  return this.produtos.length + 1;
}


}

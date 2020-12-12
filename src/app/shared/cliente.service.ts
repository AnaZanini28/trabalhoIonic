import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Clientes } from './clientes';
import { Sexo } from './sexo.enum';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //cria a lista de clientes
    private clientes : Clientes[];

  constructor(
    public toastController: ToastController
  ) { 

    //chama a lista de clientes e adiciona os valores iniciais
    this.clientes = [
      { codigo: 1, 
        nome: 'Diego',
        cpf: '000.000.000.00',
        sexo: Sexo.M,
        nascimento: new Date(1993,9,14),
        telefone: '(00)0000-0000',
        foto: 'https://i.pinimg.com/736x/22/c8/d8/22c8d8828c9a2aa6cb6ba334d83c454c.jpg' 
      },
      { codigo: 2, 
        nome: 'Ana Caroline',
        cpf: '000.000.000.00',
        sexo: Sexo.F,
        nascimento: new Date(1999,8,28),
        telefone: '(00)0000-0000',
        foto: 'https://i.pinimg.com/564x/eb/99/72/eb99727e10cbb4ae6a752271ac7cf5f6.jpg'
      } 
    ];
  }

  //parametro que busca o valor na edição
  getCliente(codigo: number): Clientes {
    return this.clientes.find(c => c.codigo === codigo);
  }

  //buscar clientes fora desta pagina
  getClientes(){
    return this.clientes;
  }

  //chama função excluir clientes na pagina "clientes-list.page.ts"
  excluir(cliente: Clientes){
    this.clientes = this.clientes.filter (c => c.codigo !== cliente.codigo);
  }
  
  //mostrar mensagem adicionado
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Cliente adicionado com sucesso!',
      duration: 2000
    });
    toast.present();
  }
  
  //mostrar mensagem editado
  async presentToast1() {
    const toast = await this.toastController.create({
      message: 'Cliente editado com sucesso!',
      duration: 2000
    });
    toast.present();
  }
  
  //chama função salvar clientes na pagina "clientes-cadastro.page.ts"
  salvar(cliente: Clientes) {

    const indice = this.clientes.findIndex(c => c.codigo === cliente.codigo);

    if(indice === -1){ // adiciona
      this.clientes = [...this.clientes, cliente];
      this.presentToast(); 
    }else{// edita
      this.clientes[indice] = {...cliente}; 
       this.presentToast1(); 
    }
    
  }

  getCodigo(){
    return this.clientes.length + 1;
  }

}

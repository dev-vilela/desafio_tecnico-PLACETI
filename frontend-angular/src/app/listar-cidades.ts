import {Component} from '@angular/core';
import {ImportsModule} from './imports';
import {Cidade} from '@domain/cidade';
import {ProjetoService} from '@service/projeto-service';
import {CadastrarCidade} from './cadastrar-cidade';
import {MessageService} from 'primeng/api';
import { Router } from '@angular/router';
//-------------------------------------------------------------------------------------
/** Tela para listar cidades */
//-------------------------------------------------------------------------------------
@Component({
    selector: 'listar-cidades',
    templateUrl: 'listar-cidades.html',
    standalone: true,
    imports: [ImportsModule, CadastrarCidade],
  
})
export class ListarCidades {
    //-------------------------------------------------------
    // Lista de cidades, exibida na tabela
    //-------------------------------------------------------
    listaCidades!: Cidade[];

    //-------------------------------------------------------------
    // Atributo que guarda a cidade que foi selecionada na tabela
    //-------------------------------------------------------------
    cidadeSelecionada: Cidade = new Cidade();

    //-------------------------------------------------------------
    // Flag usada para mostrar/esconder a janela de cadastro
    //-------------------------------------------------------------
    mostraJanelaCadastro: boolean = false;

    //--------------------------------------------------------------
    /** Construtor. Recebe os services usados pelo componente */
    //--------------------------------------------------------------
    //constructor(private service: ProjetoService, private messageService: MessageService) {}

    //-------------------------------------------------------------------------------------
    /** Inicializacao do componente. Recupera a lista de cidades para exibir na tabela */
    //-------------------------------------------------------------------------------------
    ngOnInit() {
        this.pesquisarCidades();
    }

    //-------------------------------------------------------------------------------------
    /** Método chamado para recuperar cidades para a tabela */
    //-------------------------------------------------------------------------------------
private pesquisarCidades(): void {
  this.service.pesquisarCidades().subscribe({
    next: (dados) => {
      this.listaCidades = dados;
    },
    error: (err) => {
      console.error('Erro ao buscar cidades', err);
    }
  });


}
constructor(
  private service: ProjetoService,
  private messageService: MessageService,
  private router: Router
) {}

public irParaComercios(cidade: Cidade) {
  this.router.navigate(['/comercios', cidade.id]);
}

    //-------------------------------------------------------------------------------------
    /** Método chamado ao clicar no botão 'Nova Cidade' */
    //-------------------------------------------------------------------------------------
    public abreJanelaParaCadastrarNovaCidade() {
        // Define a cidade selecionada como uma nova cidade
        this.cidadeSelecionada = new Cidade();

        // Exibe a janela de cadastro
        this.mostraJanelaCadastro = true;
    }

    //-------------------------------------------------------------------------------------
    /** Método chamado ao clicar no botão 'Alterar' */
    //-------------------------------------------------------------------------------------
    public abreJanelaParaAlterarCidade(cidade: Cidade): void {
        // Copia os dados da cidade selecionada para uma nova cidade
        this.cidadeSelecionada = new Cidade();
        this.cidadeSelecionada.id = cidade.id;
        this.cidadeSelecionada.nome = cidade.nome;
        this.cidadeSelecionada.uf = cidade.uf;
        this.cidadeSelecionada.capital = cidade.capital;

        // Exibe a janela de cadastro
        this.mostraJanelaCadastro = true;
    }

    //-------------------------------------------------------------------------------------
    /** Método chamado ao clicar no botão 'Excluir' */
    //-------------------------------------------------------------------------------------
public excluir(cidade: Cidade) {
  this.service.excluir(cidade).subscribe(() => {
    this.messageService.add({
      severity: 'success',
      summary: 'Sucesso',
      detail: `Cidade '${cidade.nome}' excluída!`
    });

    this.pesquisarCidades();
  });
 }


 
    //-------------------------------------------------------------------------------------
    /** Método chamado quando a janela de cadastro é fechada */
    //-------------------------------------------------------------------------------------
    public fechaJanelaCadastro(salvou: boolean): void {
        // Esconde a janela de cadastro
        this.mostraJanelaCadastro = false;

        // Se salvou, atualiza a lista de cidades
        if(salvou) {
           setTimeout(() => this.pesquisarCidades(), 100);
        }
    }

}

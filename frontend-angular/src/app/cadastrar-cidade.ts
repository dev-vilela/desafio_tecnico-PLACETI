import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImportsModule } from './imports';
import { Cidade } from '@domain/cidade';
import { ProjetoService } from '@service/projeto-service';
import { MessageService } from 'primeng/api';

//-------------------------------------------------------------------------------------
/** Tela para cadastro de cidades */
//-------------------------------------------------------------------------------------
@Component({
    selector: 'cadastrar-cidade',
    templateUrl: 'cadastrar-cidade.html',
    standalone: true,
    imports: [ImportsModule],
    providers: [ProjetoService]
})
export class CadastrarCidade {

    //-------------------------------------------------------
    // Parâmetro de entrada para o componente
    //-------------------------------------------------------
    @Input() public cidade: Cidade = new Cidade();

    //-------------------------------------------------------
    // Evento lançado ao fechar a janela
    //-------------------------------------------------------
    @Output('onClose') private eventoFechaJanela = new EventEmitter<boolean>();

    //--------------------------------------------------------------
    /** Construtor. */
    //--------------------------------------------------------------
constructor(
  private service: ProjetoService,
  private messageService: MessageService
) {}

    //-------------------------------------------------------------------------------------
    /** Método chamado ao clicar no botao 'salvar' */
    //-------------------------------------------------------------------------------------
public salvar(): void {
  this.service.salvar(this.cidade).subscribe({
    next: () => {
      this.messageService.add({
        severity: 'success',
        summary: 'Sucesso',
        detail: 'Cidade salva com sucesso!'
      });

      this.eventoFechaJanela.emit(true);
    },
    error: () => {
      this.messageService.add({
        severity: 'error',
        summary: 'Erro',
        detail: 'Erro ao salvar cidade'
      });
    }
  });
}
    //-------------------------------------------------------------------------------------
    /** Método chamado ao clicar no botao 'cancelar' */
    //-------------------------------------------------------------------------------------
    public cancelar(): void {
        this.eventoFechaJanela.emit(false) ;
    }

    public reloadPage(): void {
      setTimeout(() => window.location.reload(), 100);
    }

}

import { Component } from '@angular/core';
import {TarefaService} from '../../shared/shared/services/tarefa.service';
import {Tarefa} from '../../shared/model/tarefa';

@Component({
  selector: 'app-listagem-tarefas',
  standalone: false,

  templateUrl: './listagem-tarefas.component.html',
  styleUrl: './listagem-tarefas.component.css'
})
export class ListagemTarefasComponent {
    tarefas: Tarefa[] = [];

    constructor(private service: TarefaService) {this.atualizar()
        console.log(this.tarefas)
    }

    atualizar() {
        this.service.listar().subscribe(aux => this.tarefas = aux);
    }

    // Remover
    remover(id: string, index: number) {

        this.service.remover(id).subscribe(
            () => {
                const tarefaIndx = this.tarefas.findIndex(tarefa => tarefa.id === id);
                this.tarefas.splice(tarefaIndx, 1);
            }
        );
    }

    // TODO: Corrigir na próxima etapa
    // Concluir tarefa
    marcarConcluido(index: number) {
        this.tarefas[index].toggleConcluida();
    }
}

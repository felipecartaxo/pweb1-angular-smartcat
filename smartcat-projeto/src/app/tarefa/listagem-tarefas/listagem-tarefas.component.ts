import { Component } from '@angular/core';
import { TAREFAS } from '../../shared/model/TAREFAS';

@Component({
  selector: 'app-listagem-tarefas',
  standalone: false,

  templateUrl: './listagem-tarefas.component.html',
  styleUrl: './listagem-tarefas.component.css'
})
export class ListagemTarefasComponent {

    tarefas = TAREFAS;

    // Remover
    remover(index: number) {
        this.tarefas.splice(index, 1);
    }

    // Concluir tarefa
    marcarConcluido(index: number) {
        this.tarefas[index].toggleConcluida();
    }
}

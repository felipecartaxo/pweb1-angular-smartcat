import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tarefa } from '../../shared/model/tarefa';
import { TAREFAS } from '../../shared/model/TAREFAS';
import { TarefaService } from '../../shared/shared/services/tarefa.service';

@Component({
    selector: 'app-quadro-todo',
    standalone: false,
    templateUrl: './quadro-todo.component.html',
    styleUrls: ['./quadro-todo.component.css']
})
export class QuadroTodoComponent {

    // tarefas: Tarefa[] = [];
    tarefas = TAREFAS;

    constructor(private tarefaService: TarefaService) {}

    cadastrar(form: NgForm) {
        const { tarefa, descricao } = form.controls;

        if (tarefa.value && descricao.value) {
            this.tarefaService.cadastrar(new Tarefa(tarefa.value, descricao.value)).subscribe();
            form.reset();
        }
    }

    remover(tarefaARemover: Tarefa) {

        this.tarefaService.remover(tarefaARemover.id!.toString()).subscribe(
            () => {
                const tarefaIndx = this.tarefas.findIndex(tarefa => tarefa.id === tarefaARemover.id);
                this.tarefas.splice(tarefaIndx, 1);
            }
        );
    }

    // TODO: Corrigir na próxima etapa
    // Destacar como "concluída"
    // marcarConcluido(index: number) {
    //     this.tarefas[index].toggleConcluida();
    // }
}

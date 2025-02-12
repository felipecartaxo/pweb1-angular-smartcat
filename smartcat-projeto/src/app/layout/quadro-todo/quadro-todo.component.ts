import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tarefa } from '../../shared/model/tarefa';
import { TAREFAS } from '../../shared/model/TAREFAS';

@Component({
    selector: 'app-quadro-todo',
    standalone: false,
    templateUrl: './quadro-todo.component.html',
    styleUrls: ['./quadro-todo.component.css'],
})
export class QuadroTodoComponent {
    // tarefas: Tarefa[] = []; // Array vazio para começar sem tarefas
    tarefas = TAREFAS;
    constructor() {}

    // Cadastrar
    cadastrar(form: NgForm) {
        const { tarefa, descricao } = form.controls;

        if (tarefa.value && descricao.value) {
            this.tarefas.push(new Tarefa(tarefa.value, descricao.value));
            form.reset();
        }
    }

    // Remover
    remover(index: number) {
        this.tarefas.splice(index, 1);
    }

    // Destacar como "concluída"
    marcarConcluido(index: number) {
        this.tarefas[index].toggleConcluida();
    }
}

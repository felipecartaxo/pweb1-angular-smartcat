import { Component } from '@angular/core';
import { Tarefa } from '../../shared/model/tarefa';
import { TAREFAS } from '../../shared/model/TAREFAS';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro-tarefas',
  standalone: false,

  templateUrl: './cadastro-tarefas.component.html',
  styleUrl: './cadastro-tarefas.component.css'
})
export class CadastroTarefasComponent {

    tarefas = TAREFAS;
    constructor() {

    }

    // Cadastrar
    cadastrar(form: NgForm) {
        const { tarefa, descricao } = form.controls;

        if (tarefa.value && descricao.value) {
            this.tarefas.push(new Tarefa(tarefa.value, descricao.value));
            form.reset();
        }
    }
}

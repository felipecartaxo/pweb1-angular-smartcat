import { Component } from '@angular/core';
import { Tarefa } from '../../shared/model/tarefa';
import { TAREFAS } from '../../shared/model/TAREFAS';
import { NgForm } from '@angular/forms';
import { TarefaService } from '../../shared/shared/services/tarefa.service';

@Component({
  selector: 'app-cadastro-tarefas',
  standalone: false,

  templateUrl: './cadastro-tarefas.component.html',
  styleUrl: './cadastro-tarefas.component.css'
})
export class CadastroTarefasComponent {

    tarefas = TAREFAS;
    constructor(private tarefaService: TarefaService) {

    }

    // Cadastrar
    cadastrar(form: NgForm) {
        const { tarefa, descricao } = form.controls;

        if (tarefa.value && descricao.value) {
            this.tarefaService.cadastrar(new Tarefa(tarefa.value, descricao.value)).subscribe();
            form.reset();
        }
    }
}

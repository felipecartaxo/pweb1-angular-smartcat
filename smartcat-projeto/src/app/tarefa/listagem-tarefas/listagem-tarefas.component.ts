import { Component } from '@angular/core';
import { TAREFAS } from '../../shared/model/TAREFAS'

@Component({
  selector: 'app-listagem-tarefas',
  standalone: false,

  templateUrl: './listagem-tarefas.component.html',
  styleUrl: './listagem-tarefas.component.css'
})
export class ListagemTarefasComponent {

    TAREFAS = TAREFAS;

    constructor() {
    }
}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tarefa } from '../../shared/model/tarefa';

@Component({
    selector: 'app-quadro-todo',
    standalone: false,
    templateUrl: './quadro-todo.component.html',
    styleUrls: ['./quadro-todo.component.css'],
})
export class QuadroTodoComponent {
    taskArray: Tarefa[] = []; // Array vazio para começar sem tarefas

    constructor() {}

    onSubmit(form: NgForm) {
        const { task, description } = form.controls;

        if (task.value && description.value) {
            this.taskArray.push(new Tarefa(task.value, description.value));
            form.reset();
        }
    }

    onDelete(index: number) {
        this.taskArray.splice(index, 1);
    }

    onCheck(index: number) {
        this.taskArray[index].toggleConcluida();
    }
}

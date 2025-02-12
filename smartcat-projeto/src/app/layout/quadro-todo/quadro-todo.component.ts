import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-quadro-todo',
  standalone: false,

  templateUrl: './quadro-todo.component.html',
  styleUrl: './quadro-todo.component.css'
})
export class QuadroTodoComponent {
    taskArray = [{taskName: "Teste 1", isCompleted: false}, {taskName: "Teste 2", isCompleted: false}, {taskName: "Teste 3", isCompleted: false}, {taskName: "Teste 4", isCompleted: false}, {taskName: "Teste 5", isCompleted: false}]

    constructor() {}

    onSubmit(form: NgForm) {
        console.log(form);

        this.taskArray.push({
            taskName: form.controls["task"].value, isCompleted: false
        })

        form.reset();
    }

    onDelete(index: number) {
        console.log(index);

        this.taskArray.splice(index, 1);
    }

    onCheck(index: number) {
        console.log(this.taskArray);

        this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
    }
}

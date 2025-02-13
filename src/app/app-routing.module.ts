import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuadroTodoComponent} from './layout/quadro-todo/quadro-todo.component';
import {TelaLoginComponent} from './layout/tela-login/tela-login.component';

const routes: Routes = [
    {
        path: 'todo',
        component: QuadroTodoComponent
    },
    {
        path: "login",
        component: TelaLoginComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

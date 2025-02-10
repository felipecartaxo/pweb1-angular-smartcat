import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemTarefasComponent } from './tarefa/listagem-tarefas/listagem-tarefas.component';

const routes: Routes = [
    {
        path: 'listagem-tarefas',
        component: ListagemTarefasComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

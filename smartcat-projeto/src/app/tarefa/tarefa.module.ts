import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemTarefasComponent } from './listagem-tarefas/listagem-tarefas.component';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatBadge } from '@angular/material/badge';
import { MatCardTitle } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { CadastroTarefasComponent } from './cadastro-tarefas/cadastro-tarefas.component';

@NgModule({
    declarations: [
        ListagemTarefasComponent,
        CadastroTarefasComponent
    ],
    exports: [
        ListagemTarefasComponent,
        CadastroTarefasComponent
    ],
    imports: [
        CommonModule,
        MatCard,
        MatCardHeader,
        MatCardContent,
        MatCardActions,
        MatIcon,
        MatBadge,
        MatCardTitle,
        MatCardSubtitle,
        MatButton
    ]
})
export class TarefaModule { }

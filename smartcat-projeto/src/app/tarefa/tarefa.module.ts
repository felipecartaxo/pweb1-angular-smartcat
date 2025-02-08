import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemTarefasComponent } from './listagem-tarefas/listagem-tarefas.component';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {MatBadge} from '@angular/material/badge';
import {MatCardTitle} from '@angular/material/card';

@NgModule({
    declarations: [
        ListagemTarefasComponent
    ],
    exports: [
        ListagemTarefasComponent
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
        MatCardSubtitle
    ]
})
export class TarefaModule { }

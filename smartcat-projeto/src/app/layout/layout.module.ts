import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { MatList, MatListItem } from "@angular/material/list";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatAnchor, MatButton } from '@angular/material/button';
import { MatMenuModule} from '@angular/material/menu';
import { QuadroComponent } from './quadro/quadro.component';
import { TarefaModule } from '../tarefa/tarefa.module';
import {
    MatCard, MatCardActions,
    MatCardContent,
    MatCardFooter,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle
} from '@angular/material/card';
import { MatChip, MatChipSet } from '@angular/material/chips';
import { QuadroTodoComponent } from './quadro-todo/quadro-todo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { BotaoLogoutComponent } from './botao-logout/botao-logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TelaLoginComponent } from './tela-login/tela-login.component';

@NgModule({
    declarations: [
        BarraSuperiorComponent,
        MenuLateralComponent,
        QuadroComponent,
        QuadroTodoComponent,
        RodapeComponent,
        BotaoLogoutComponent,
        TelaLoginComponent
    ],
    exports: [
        BarraSuperiorComponent,
        MenuLateralComponent,
        QuadroComponent,
        RodapeComponent,
        BotaoLogoutComponent,
        TelaLoginComponent
    ],
    imports: [
        MatButton,
        CommonModule,
        MatList,
        MatListItem,
        MatIcon,
        MatFormFieldModule,
        MatInput,
        MatMenuModule,
        TarefaModule,
        MatCard,
        MatCardContent,
        MatCardHeader,
        MatCardSubtitle,
        MatCardTitle,
        MatCardFooter,
        MatChipSet,
        MatChip,
        MatAnchor,
        FormsModule,
        ReactiveFormsModule,
        MatCardActions
    ]
})
export class LayoutModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { MatList, MatListItem } from "@angular/material/list";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatMenuModule} from '@angular/material/menu';
import { QuadroComponent } from './quadro/quadro.component';
import { TarefaModule } from '../tarefa/tarefa.module';

@NgModule({
  declarations: [
    BarraSuperiorComponent,
    MenuLateralComponent,
    QuadroComponent
  ],
    exports: [
        BarraSuperiorComponent,
        MenuLateralComponent,
        QuadroComponent
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
        TarefaModule
    ]
})
export class LayoutModule { }

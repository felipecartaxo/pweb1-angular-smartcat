import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { MatList, MatListItem } from "@angular/material/list";
import { MatIcon } from '@angular/material/icon';



@NgModule({
  declarations: [
    BarraSuperiorComponent,
    MenuLateralComponent
  ],
  exports: [
    BarraSuperiorComponent,
    MenuLateralComponent
  ],
  imports: [
    CommonModule,
    MatList,
    MatListItem,
    MatIcon
  ]
})
export class LayoutModule { }

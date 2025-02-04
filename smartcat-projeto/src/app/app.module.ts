import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';

// Importando os módulos do Angular Material
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatList, MatListItem } from '@angular/material/list';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { BarraSuperiorComponent } from './components/barra-superior/barra-superior.component';
import { MatFormField } from "@angular/material/form-field";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    BarraSuperiorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatList,
    MatListItem,
    MatSidenavContainer,
    MatFormField,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

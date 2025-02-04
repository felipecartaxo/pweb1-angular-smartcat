import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Importando os módulos do Angular Material
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatList, MatListItem } from '@angular/material/list';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { MatFormField } from "@angular/material/form-field";
import { FormsModule } from '@angular/forms';
import { LayoutModule } from "./layout/layout.module";

@NgModule({
  declarations: [
    AppComponent,
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
        FormsModule,
        LayoutModule
    ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

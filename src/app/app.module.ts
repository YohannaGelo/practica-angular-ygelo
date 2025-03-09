import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { BusquedasComponent } from './busquedas/busquedas.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { DetalleComponenteComponent } from './detalle-componente/detalle-componente.component';
import { ListaComponentesComponent } from './lista-componentes/lista-componentes.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    BusquedasComponent,
    AcercaDeComponent,
    PaginaNoEncontradaComponent,
    DetalleComponenteComponent,
    ListaComponentesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

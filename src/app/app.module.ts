import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { BusquedasComponent } from './busquedas/busquedas.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { DetalleComponenteComponent } from './detalle-componente/detalle-componente.component';
import { ListaComponentesComponent } from './lista-componentes/lista-componentes.component';
import { EditarComponenteComponent } from './editar-componente/editar-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    BusquedasComponent,
    AcercaDeComponent,
    PaginaNoEncontradaComponent,
    DetalleComponenteComponent,
    ListaComponentesComponent,
    EditarComponenteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { DetalleComponenteComponent } from './detalle-componente/detalle-componente.component';
import { ListaComponentesComponent } from './lista-componentes/lista-componentes.component';
import { EditarComponenteComponent } from './editar-componente/editar-componente.component';
import { MiTextoPipe } from './mi-texto.pipe';
import { VistaInteractivaComponent } from './vista-interactiva/vista-interactiva.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    AcercaDeComponent,
    PaginaNoEncontradaComponent,
    DetalleComponenteComponent,
    ListaComponentesComponent,
    EditarComponenteComponent,
    MiTextoPipe,
    VistaInteractivaComponent,
    PdfViewerComponent,
    SafePipe
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

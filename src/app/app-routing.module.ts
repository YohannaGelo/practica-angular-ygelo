import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ListaComponentesComponent } from './lista-componentes/lista-componentes.component';
import { DetalleComponenteComponent } from './detalle-componente/detalle-componente.component';
import { EditarComponenteComponent } from './editar-componente/editar-componente.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { VistaInteractivaComponent } from './vista-interactiva/vista-interactiva.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


const routes: Routes = [
  {path: '', redirectTo: '/bienvenida', pathMatch: 'full' },
  { path: 'bienvenida', component: BienvenidaComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: 'lista-componentes', component: ListaComponentesComponent },
  { path: 'detalle-componente/:id', component: DetalleComponenteComponent },
  { path: 'editar-componente/:id', component: EditarComponenteComponent },
  { path: 'vista-interactiva', component: VistaInteractivaComponent },
  { path: 'pdf-viewer', component: PdfViewerComponent },
  { path: '**', component: PaginaNoEncontradaComponent }
];

const routerOptions: ExtraOptions = {
  useHash: true // Esto activa la estrategia HashLocation
};


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }  // Configuración para usar HashLocationStrategy
  ]
})
export class AppRoutingModule { }

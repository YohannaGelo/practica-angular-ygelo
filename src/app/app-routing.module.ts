import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { BusquedasComponent } from './busquedas/busquedas.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ListaComponentesComponent } from './lista-componentes/lista-componentes.component';
import { DetalleComponenteComponent } from './detalle-componente/detalle-componente.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';


const routes: Routes = [
  {path: '', redirectTo: '/bienvenida', pathMatch: 'full' },
  { path: 'bienvenida', component: BienvenidaComponent },
  { path: 'busquedas', component: BusquedasComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: 'lista-componentes', component: ListaComponentesComponent },
  { path: 'detalle-componente/:id', component: DetalleComponenteComponent },
  { path: '**', component: PaginaNoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

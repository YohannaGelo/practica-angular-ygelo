import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { ComponentesService, Componente } from '../services/componentes.service';

@Component({
  selector: 'app-lista-componentes',
  standalone: false,
  templateUrl: './lista-componentes.component.html',
  styleUrl: './lista-componentes.component.css',
})
export class ListaComponentesComponent {
  componentes: Componente[] = []; // Lista de componentes
  nuevoComponente: Componente = {
    id: 0,
    nombre: '',
    descripcion: '',
    url_imagen: '',
    tipo: '',
  }; // Objeto para nuevo componente
  filtroNombre: string = ''; // Filtro por nombre
  filtroTipo: string = ''; // Filtro por tipo
  paginaActual: number = 1; // Paginación
  itemsPorPagina: number = 5; // Número de items por página

  constructor(
    private componentesService: ComponentesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarComponentes();
  }

  cargarComponentes(): void {
    this.componentesService.getComponentes().subscribe(
      (data) => {
        this.componentes = data;
      },
      (error) => {
        console.error('Error al cargar componentes:', error);
      }
    );
  }

  agregarComponente(): void {
    this.componentesService.agregarComponente(this.nuevoComponente).subscribe(
      (data) => {
        this.componentes.push(data); // Agrega el nuevo componente a la lista
        this.nuevoComponente = {
          id: 0,
          nombre: '',
          descripcion: '',
          url_imagen: '',
          tipo: '',
        }; // Limpia el formulario
      },
      (error) => {
        console.error('Error al agregar componente:', error);
      }
    );
  }

  verDetalles(id: number): void {
    this.router.navigate(['/detalle-componente', id]);
  }

  eliminarComponente(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este componente?')) {
      this.componentesService.eliminarComponente(id).subscribe(
        () => {
          // Filtra la lista de componentes para eliminar el componente con el id especificado
          this.componentes = this.componentes.filter(
            (componente) => componente.id !== id
          );
          console.log('Componente eliminado correctamente');
        },
        (error) => {
          console.error('Error al eliminar componente:', error);
        }
      );
    }
  }

  // Filtra los componentes por nombre y tipo
  get componentesFiltrados(): Componente[] {
    return this.componentes.filter(
      (componente) =>
        componente.nombre
          .toLowerCase()
          .includes(this.filtroNombre.toLowerCase()) &&
        componente.tipo.toLowerCase().includes(this.filtroTipo.toLowerCase())
    );
  }

  // Paginación
  get componentesPaginados(): Componente[] {
    const inicio = (this.paginaActual - 1) * this.itemsPorPagina;
    const fin = inicio + this.itemsPorPagina;
    return this.componentesFiltrados.slice(inicio, fin);
  }

  cambiarPagina(pagina: number): void {
    this.paginaActual = pagina;
  }

  getPaginas(): number[] {
    const totalPaginas = Math.ceil(this.componentesFiltrados.length / this.itemsPorPagina);
    return Array.from({ length: totalPaginas }, (_, i) => i + 1);
  }
}

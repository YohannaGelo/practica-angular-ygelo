import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ComponentesService, Componente } from '../services/componentes.service';

@Component({
  selector: 'app-detalle-componente',
  standalone: false,
  templateUrl: './detalle-componente.component.html',
  styleUrl: './detalle-componente.component.css'
})
export class DetalleComponenteComponent {

  componente: Componente | null = null; // Almacena los detalles del componente
  isLoading = true; // Para mostrar un spinner mientras se carga la información
  errorMessage: string | null = null; // Para manejar errores

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private componentesService: ComponentesService
  ) {}

  ngOnInit(): void {
    // Obtener el ID del componente desde la ruta
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.cargarDetalleComponente(+id); // Convertir el ID a número
    } else {
      this.errorMessage = 'No se proporcionó un ID válido.';
      this.isLoading = false;
    }
  }

  cargarDetalleComponente(id: number): void {
    this.componentesService.getComponenteById(id).subscribe(
      (data) => {
        this.componente = data;
        this.isLoading = false;
      },
      (error) => {
        this.errorMessage = 'Error al cargar los detalles del componente.';
        this.isLoading = false;
        console.error(error);
      }
    );
  }

  editarComponente(): void {
    if (this.componente) {
      this.router.navigate(['/editar-componente', this.componente.id]); // Navegar a la página de edición
    }
  }

  eliminarComponente(): void {
    if (this.componente && confirm('¿Estás seguro de que deseas eliminar este componente?')) {
      this.componentesService.eliminarComponente(this.componente.id).subscribe(
        () => {
          this.router.navigate(['/lista-componentes']); // Redirigir a la lista de componentes
        },
        (error) => {
          this.errorMessage = 'Error al eliminar el componente.';
          console.error(error);
        }
      );
    }
  }

}

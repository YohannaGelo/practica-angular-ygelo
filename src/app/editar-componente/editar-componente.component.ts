import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentesService, Componente } from '../services/componentes.service';

@Component({
  selector: 'app-editar-componente',
  standalone: false,
  templateUrl: './editar-componente.component.html',
  styleUrls: ['./editar-componente.component.css']
})
export class EditarComponenteComponent implements OnInit {
  componente: Componente = { id: 0, nombre: '', descripcion: '', url_imagen: '', tipo: '' }; // Objeto para el componente
  isLoading = true; // Para mostrar un spinner mientras se carga la información
  errorMessage: string | null = null; // Para manejar errores

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private componentesService: ComponentesService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.cargarComponente(+id); // Convertir el ID a número
    } else {
      this.errorMessage = 'No se proporcionó un ID válido.';
      this.isLoading = false;
    }
  }

  cargarComponente(id: number): void {
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

  // guardarCambios(): void {
  //   this.componentesService.actualizarComponente(this.componente).subscribe(
  //     () => {
  //       this.router.navigate(['/detalle-componente', this.componente.id]); // Redirigir a la vista de detalles
  //     },
  //     (error) => {
  //       this.errorMessage = 'Error al actualizar el componente.';
  //       console.error(error);
  //     }
  //   );
  // }

  guardarCambios(): void {
    this.componentesService.actualizarComponente(this.componente).subscribe(
      () => {
        this.router.navigate(['/detalle-componente', this.componente.id]); // Redirigir a la vista de detalles
      },
      (error) => {
        this.errorMessage = 'Error al actualizar el componente.';
        console.error(error);
      }
    );
  }
}
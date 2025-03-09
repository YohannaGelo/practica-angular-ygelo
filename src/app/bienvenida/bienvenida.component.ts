import { Component, OnInit } from '@angular/core';
import {
  Componente,
  ComponentesService,
} from '../services/componentes.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  standalone: false,
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.css',
})
export class BienvenidaComponent implements OnInit {
  componentes: Componente[] = [];
  componentesFiltrados: Componente[] = [];
  tooltipVisible = false;
  componenteSeleccionado: Componente | null = null;
  tooltipStyle = { top: '0px', left: '0px' };

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
        console.log('Componentes cargados:', data); // Verifica en la consola
      },
      (error) => console.error('Error al cargar componentes:', error)
    );
  }

  mostrarTooltip(componente: Componente, event: MouseEvent): void {
    console.log('Mostrar tooltip para:', componente); // <-- Verifica que se ejecute
    this.componenteSeleccionado = componente;
    this.tooltipVisible = true;
    this.filtrarComponentesPorTipo(componente.tipo); // <-- Filtra los componentes por tipo
    this.actualizarTooltip(event);
  }

  ocultarTooltip(): void {
    this.tooltipVisible = false;
  }

  actualizarTooltip(event: MouseEvent): void {
    const offset = 15;
    const tooltipHeight = 300;
    const tooltipWidth = 400;
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    // Posición horizontal
    let left: number;
    if (event.clientX > windowWidth / 2) {
      left = event.clientX - tooltipWidth * 1.5; // Muestra el tooltip a la izquierda del ratón
    } else {
      left = event.clientX + offset; // Muestra el tooltip a la derecha del ratón
    }

    // Posición vertical
    let top: number;
    if (event.clientY > windowHeight / 2) {
      top = event.clientY - tooltipHeight/2; // Muestra el tooltip arriba del ratón
    } else {
      top = event.clientY + offset; // Muestra el tooltip abajo del ratón
    }

    // Actualiza el estilo del tooltip
    this.tooltipStyle = {
      top: `${top}px`,
      left: `${left}px`,
    };
  }

  filtrarComponentesPorTipo(tipo: string): void {
    this.componentesFiltrados = this.componentes.filter(
      (componente) => componente.tipo.toLowerCase() === tipo.toLowerCase()
    );
    console.log('Componentes filtrados:', this.componentesFiltrados); // <-- Añade este console.log
  }

  verDetalle(id: number): void {
    this.router.navigate(['/detalle-componente', id]);
  }
}

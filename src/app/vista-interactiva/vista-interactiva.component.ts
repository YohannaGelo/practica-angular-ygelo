// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {
  Componente,
  ComponentesService,
} from '../services/componentes.service';

import { Router } from '@angular/router';
import { right } from '@popperjs/core';

@Component({
  selector: 'app-vista-interactiva',
  standalone: false,
  templateUrl: './vista-interactiva.component.html',
  styleUrl: './vista-interactiva.component.css'
})
export class VistaInteractivaComponent implements OnInit  {
  componentes: Componente[] = [];
  componentesFiltrados: Componente[] = [];
  tooltipVisible = false;
  componenteSeleccionado: Componente | null = null;
  tooltipStyle = { top: '0px', left: '0px', width: '0px', height: '0px' };

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
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
  
    // Establece el tamaño del tooltip proporcional al tamaño de la ventana
    const tooltipWidth = windowWidth < 768 ? windowWidth * 0.8 : 400; // 80% del ancho en móviles
    const tooltipHeight = windowHeight < 768 ? windowHeight * 0.4 : 300; // 40% del alto en móviles
  
    let left: number;
    let top: number;
  
    // Ajustar la posición horizontal en función de la posición del ratón
    if (event.clientX > windowWidth / 2) {
      left = event.clientX - (tooltipWidth * 2.3) - offset; // Muestra el tooltip a la izquierda del ratón
    } else {
      left = event.clientX - tooltipWidth - offset; // Muestra el tooltip a la derecha del ratón
    }
  
    // Ajustar la posición vertical en función de la posición del ratón
    if (event.clientY > windowHeight / 2) {
      top = event.clientY - (tooltipHeight * 2) + offset; // Muestra el tooltip arriba del ratón
    } else {
      top = event.clientY - (tooltipHeight / 2); // Muestra el tooltip abajo del ratón
    }
  
    // Ajustar si el tooltip se sale del lado derecho
    if (left + tooltipWidth > windowWidth) {
      left = windowWidth - tooltipWidth - offset;
    }
  
    // Ajustar si el tooltip se sale del lado inferior
    if (top + tooltipHeight > windowHeight) {
      top = windowHeight - tooltipHeight - offset;
    }
  
    // Asegura que no haya valores negativos
    left = Math.max(left, offset);
    top = Math.max(top, offset);
  
    // Actualiza el estilo del tooltip
    this.tooltipStyle = {
      top: `${top}px`,
      left: `${left}px`,
      width: `${tooltipWidth}px`,   // Mantén el tamaño proporcional
      height: `${tooltipHeight}px`, // Mantén el tamaño proporcional
    };
  }
  
  

  // actualizarTooltip(event: MouseEvent): void {
  //   const offset = 15;
  //   const tooltipHeight = 300;
  //   const tooltipWidth = 400;
  //   const windowHeight = window.innerHeight;
  //   const windowWidth = window.innerWidth;

  //   // Posición horizontal
  //   let left: number;
  //   if (event.clientX > windowWidth / 2) {
  //     left = event.clientX - (tooltipWidth * 2.3) - offset; // Muestra el tooltip a la izquierda del ratón
  //   } else {
  //     left = event.clientX - tooltipWidth - offset; // Muestra el tooltip a la derecha del ratón
  //   }

  //   // Posición vertical
  //   let top: number;
  //   if (event.clientY > windowHeight / 2) {
  //     top = event.clientY - (tooltipHeight * 2) + offset; // Muestra el tooltip arriba del ratón
  //   } else {
  //     top = event.clientY - (tooltipHeight / 2); // Muestra el tooltip abajo del ratón
  //   }

  //   // Actualiza el estilo del tooltip
  //   this.tooltipStyle = {
  //     top: `${top}px`,
  //     left: `${left}px`,
  //   };
  // }

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

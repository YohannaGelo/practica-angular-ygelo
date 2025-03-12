// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {
  Componente,
  ComponentesService,
} from '../services/componentes.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-vista-interactiva',
  standalone: false,
  templateUrl: './vista-interactiva.component.html',
  styleUrl: './vista-interactiva.component.css',
})
export class VistaInteractivaComponent implements OnInit {
  componentes: Componente[] = [];
  componentesFiltrados: Componente[] = [];
  tooltipVisible = false;
  componenteSeleccionado: Componente | null = null;
  tooltipStyle: any = {};
  isTouchDevice = false;

  constructor(
    private componentesService: ComponentesService,
    private router: Router
  ) {
    this.isTouchDevice =
      'ontouchstart' in window || navigator.maxTouchPoints > 0; // Detectar si es un dispositivo táctil
  }

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

  mostrarTooltip(componente: Componente, event: MouseEvent | TouchEvent): void {
    console.log('Mostrar tooltip para:', componente); // Verifica que se ejecute
    this.componenteSeleccionado = componente;
    this.tooltipVisible = true;
    // Filtra los componentes por tipo_id
    this.filtrarComponentesPorTipo(componente.tipo_id);

    // Obtener las coordenadas del evento
    const clientX =
      event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
    const clientY =
      event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;

    this.actualizarTooltip(clientX, clientY);
  }

  evitarOcultarTooltip(): void {
    // No hacer nada, solo evitar que el tooltip se oculte
  }

  ocultarTooltip(): void {
    this.tooltipVisible = false;
  }

  actualizarTooltip(clientX: number, clientY: number): void {
    const placaContainer = document.querySelector(
      '.placa-container'
    ) as HTMLElement;
    const placaRect = placaContainer.getBoundingClientRect();

    // Ajuste de medida del tooltip en base a la medida de la placa según la pantalla
    const tooltipWidth =
      placaRect.width *
      (placaRect.height < 300 ? 0.50 : placaRect.height < 500 ? 0.5 : 0.3); // menor 300px = 50% / menor 500px = 50% / mayor = 30%

    const tooltipHeight =
      placaRect.height *
      (placaRect.height < 300 ? 1.5 : placaRect.height < 500 ? 0.8 : 0.44); 

    // Coordenadas relativas al componente padre
    const mouseX = clientX - placaRect.left;
    const mouseY = clientY - placaRect.top;

    let tooltipLeft = mouseX + 20; // Desplazamiento horizontal desde el ratón
    let tooltipTop = mouseY + 20; // Desplazamiento vertical desde el ratón

    // Si el ratón está a la derecha de la mitad del contenedor, el tooltip se coloca a la izquierda
    if (mouseX > placaRect.width / 2) {
      tooltipLeft = mouseX - tooltipWidth - 20;
    }

    // Si el ratón está en la mitad inferior del contenedor, el tooltip se coloca arriba
    if (mouseY > placaRect.height / 2) {
      tooltipTop = mouseY - tooltipHeight - 20;
    }

    // Asegurarse de que el tooltip no se salga de los límites del contenedor
    if (tooltipLeft + tooltipWidth > placaRect.width) {
      tooltipLeft = placaRect.width - tooltipWidth;
    }
    if (tooltipLeft < 0) {
      tooltipLeft = 0;
    }

    if (tooltipTop + tooltipHeight > placaRect.height) {
      tooltipTop = placaRect.height - tooltipHeight;
    }
    if (tooltipTop < 0) {
      tooltipTop = 0;
    }

    this.tooltipStyle = {
      left: `${tooltipLeft}px`,
      top: `${tooltipTop}px`,
      width: `${tooltipWidth}px`, // Asignar el ancho calculado
      height: `${tooltipHeight}px`, // Asignar el alto calculado
    };
  }

  cerrarTooltip(): void {
    this.tooltipVisible = false;
  }

  filtrarComponentesPorTipo(tipoId: number): void {
    this.componentesFiltrados = this.componentes.filter(
      (componente) => componente.tipo_id === tipoId
    );
    console.log('Componentes filtrados:', this.componentesFiltrados);
  }

  verDetalle(id: number): void {
    this.router.navigate(['/detalle-componente', id]);
  }
}
